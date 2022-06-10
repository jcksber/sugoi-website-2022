import plugAbi from '../utils/plug_abi.json';
import sugoiKeyAbi from '../utils/sugoikey_abi.json';

import Image from 'next/image';
import sugoiNavbar from '../public/sugoi_nav.jpg';
import sugoiHeroBg from '../public/hero_bg.png';
import iconChampagne from '../public/icon_champagne_pop.jpg';
import iconDiamond from '../public/icon_diamond.jpg';
import iconNoCoins from '../public/icon_no_coins.jpg';
import iconPaperPlus from '../public/icon_paper_plus.png';

import { useState, useEffect } from 'react';
import { useGasPrice, useEthers } from '@usedapp/core';
import { ethers, utils, BigNumber } from 'ethers';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;


export default function Sugoi() {

	const [isConnected, setConnectedStatus] = useState(false);
	const [walletAddress, setWallet] = useState("");
	const { activateBrowserWallet, account } = useEthers();
	const [status, setStatus] = useState("");

	// const PLUG_ADDRESS = "0x2bb501a0374ff3af41f2009509e9d6a36d56a6c0";
	const PLUG_ADDRESS = "0x20452689c4aeAAa89A5fC015ec9aB7E069887e7f";
	// const KEY_ADDRESS = "0xE604EaC528CF069F39B00172BA6B2d2d5a0ca8Bb";
	const KEY_ADDRESS = "0x7C4055B0cccb85FD2038AB8c41d984B05F82eA1F";
	const PLUG_ABI = new utils.Interface(plugAbi);
	const KEY_ABI = new utils.Interface(sugoiKeyAbi);
	const [numPlugs, setPlugCount] = useState(0);
	const [keyQuantity, setKeyQuantity] = useState(0);
	const [plugTid, setPlugTid] = useState("");
	const [ownerOfPlugTid, setOwnerOfPlugTid] = useState("");
	const limit = useGasPrice();

	useEffect(() => {
		if (account) {
			setPlugCount(getNumPlugs());
		}
	}, [account]);

	// Obtain the number of Plugs in connected wallet
	const getNumPlugs = async () => {
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		const plugContract = await new ethers.Contract(
			PLUG_ADDRESS,
			PLUG_ABI,
			signer
		);
		const numPlugs = await plugContract.balanceOf(account);
		setPlugCount(parseInt(numPlugs.toHexString(), 16));
		return parseInt(numPlugs.toHexString(), 16);
	};

	const claimSugoiKeys = async () => {
		// Load our smart contract using ethers
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		const keyContract = await new ethers.Contract(
			KEY_ADDRESS,
			KEY_ABI,
			signer
		);
		const plugContract = await new ethers.Contract(
			PLUG_ADDRESS,
			PLUG_ABI,
			signer
		);

		// Sign the txn via metamask
		try {
			const owner = await plugContract.ownerOf(BigNumber.from(plugTid));
			setOwnerOfPlugTid(owner);

			console.log("# plug: " + numPlugs);
			console.log("# to claim: " + keyQuantity);
			console.log("plug tid: " + plugTid);
			console.log("owner of tid: " + ownerOfPlugTid);
			console.log("wallet: " + account);
			let works = ownerOfPlugTid == account;
			console.log("owner is wallet: " + works);
		} catch (error) {
			toast("That token ID doesn't seem to exist");
			console.log(error.message);
			return;
		}
		try {
            if (numPlugs < 1) {
                toast("You don't have any plugs to claim SUGOI keys");
                return;
            } else if (keyQuantity == 0) {
				toast("You must enter a number of keys to claim :)");
				return;
			} else if (keyQuantity > 5 && numPlugs < keyQuantity) {
				toast("You don't have enough Plugs to claim that many keys");
				return;
			} else if (ownerOfPlugTid != account && ownerOfPlugTid != "") {
				toast("You don't own that Plug ID!");
				return;
			}
			const txn = await keyContract.claim(account, keyQuantity, plugTid);
			return {
				success: true,
				status: "✅ Check out your transaction on Etherscan: https://etherscan.io/tx/" + txn.hash
			}
		} catch (error) {
			toast("A few things could've happened... try again & double check the mint rules")
            console.log(error.message);
			return {
				success: false,
				status: "😥 Something went wrong: " + error.message
			}
		}
	};

	const handleQuantityChange = (e) => {
		if (e.target.value < 0) {
			setKeyQuantity(0);
		} else {
			setKeyQuantity(e.target.value);
		}
	};

	const handlePlugTidChange = (e) => {
		if (e.target.value < 0) {
			setPlugTid(null);
		} else {
			setPlugTid(e.target.value);
		}
	};

	return(
		<div className="sugoi h-screen w-full">
			<ToastContainer />
			<div id="sugoi_hero">
				<div className="top-25">
					<Image src={sugoiNavbar}/>
				</div>
				<div id="bottom_75">
					<h4>PLUG HODLERS GET <span>5</span> TICKETS FOR SUGOI</h4>

					<h1>BE THE PLUG</h1>
					<h2>FOR YOUR FRENS AT NFTS NYC!</h2>

					<div id="visualization">
						<div className="red-box">
							<div className="key-box red"></div>
							<div className="you-text">
								YOU
							</div>
						</div>
						<div className="plus-container">
							<div className="plus">+</div>
						</div>
						<div className="key-boxes">
							<div className="key-box mid"></div>
							<div className="key-box mid"></div>
							<div className="key-box mid"></div>
							<div className="key-box"></div>
							<div className="frens-text">
								THE PLUG FOR 4 FRENS 
							</div>
						</div>
					</div>
				{account ?
                    (
                    	<div id="claim_inputs">
	                    	<input type="number" placeholder="# to claim" onChange={handleQuantityChange} value={keyQuantity}></input>
	                    	<input id="plugtid" type="number" placeholder="Plug token id" onChange={handlePlugTidChange} value={plugTid}></input>
	                        <button onClick={claimSugoiKeys} className="btn sugoi-btn btn-wide font-moriston-medium tracking-[1px] text-lg text-white">
	                            CLAIM
	                        </button>
	                    </div>
                    ) :
                    (<button onClick={() => activateBrowserWallet()} className="btn sugoi-btn btn-wide font-moriston-medium tracking-[1px] text-lg mini:text-lg text-white">
                        CONNECT WALLET
                    </button>)
                }
				</div>
				<div className="hero-bg-container">
					<img className="md:mt-[-5rem] laptop:mt-[-10rem]" src={sugoiHeroBg.src} />	
				</div>
			</div>

			<div className="content-window">
				<h2>SUGOI PLUG EDITION TICKET BENEFITS</h2>
				<ul>
					<li>
						<div className="sugoi-icon w70">
							<img src={iconChampagne.src} />
						</div>
						<p>"Plug" holder tickets for Sugoi include Champagne reception for you and your frens upon arrival.</p>
					</li>
					<li>
					<div className="sugoi-icon w70">
							<img src={iconDiamond.src} />
						</div>
						<p>"Plug" holders who have reached Hustler level (50% juice) will mint an aesthetically rare version.</p>
					</li>
					<li>
					<div className="sugoi-icon w70">
							<img src={iconNoCoins.src} />
						</div>
						<p>Minters pay the gas fee but the NFT is free.</p>
					</li>
					<li>
					<div className="sugoi-icon">
							<img src={iconPaperPlus.src} />
						</div>
						<p>A wallet that is HOLing 1-5 Plugs can mint 5 tickets. A wallet holding 6 or more Plugs may mint 1 ticket per Plug.</p>
					</li>
				</ul>
			</div>
		</div>

	);
};



















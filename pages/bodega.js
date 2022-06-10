
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import BodegaHero from '../components/BodegaHero'
import plugAbi from '../utils/plug_abi.json'
import juiceAbi from '../utils/juice_abi.json'


import Image from 'next/image'
import heroJuiceBg from '../public/juicebox_hero.png'
import redBox from '../public/juice_cherry_common.png'
import blueBox from '../public/juice_blue_rare.png'
import greenBox from '../public/juice_kiwi_superior.png'
import yellowBox from '../public/juice_lemon_legendary.png'

import { useState, useEffect } from 'react'
import { connectWallet, mintNFT, getMintedCount } from '../utils/Interact.js'
import { useGasPrice, useEthers } from '@usedapp/core'
import { ethers, utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;


export default function JuiceBox() {

    const { activateBrowserWallet, account } = useEthers();

	const JUICE_ADDRESS = "0x21c8e4aBf7378296F677f0A2D7FAf4D650c9AC81";
	const PLUG_ADDRESS = "0x2bb501a0374ff3af41f2009509e9d6a36d56a6c0";
	const JUICY_ABI = new utils.Interface(juiceAbi);
	const PLUG_ABI = new utils.Interface(plugAbi);
	const [soldOut, setSoldOut] = useState(false);
	const [plugs, setPlugCount] = useState(0)
    const limit = useGasPrice();
	
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
	}
	
	const claimJuiceBox = async () => {
		// Load our smart contract using ethers
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		const juiceContract = new ethers.Contract(
			JUICE_ADDRESS,
			JUICY_ABI,
			signer
		);

		const paused = await juiceContract.paused();
		if (paused) {
			toast('Minting the Juice Box is currently paused.')
			return
		}
		const isWhitelisted = await juiceContract.isWhitelisted(account);
		const juiceboxCount = await juiceContract.balanceOf(account);
        const numJuiceBoxes = parseInt(juiceboxCount.toHexString(), 16);
		// Build the transaction parameters
		const numPlugs = await getNumPlugs()
            .then(numPlugs => numPlugs)
            .catch(err => {
                console.log(err);
                return err
            });
		
		// Sign the txn via metamask
		try {
			
            if (numPlugs < 1) {
                toast("You don't have any plugs to claim juice box");
                return;
            } else if (numJuiceBoxes >= 1) {
                toast("You already claimed a juice box");
                return; 
            } else if (!isWhitelisted) {
				toast("You are not able to claim the juicebox, please reach out to the team if you think this is an error")
				return;
			}
			const txn = await juiceContract.claim(account, numPlugs, process.env.NEXT_PUBLIC_SECRET, {gasLimit: 300000})
			return {
				success: true,
				status: "✅ Check out your transaction on Etherscan: https://rinkeby.etherscan.io/tx/" + txn.hash
			}
		} catch (error) {
            toast("Dream Chaser only / 1 Juice Box max");
            console.log(error.message);
			return {
				success: false,
				status: "😥 Something went wrong: " + error.message
			}
		}
	}

	// Setup initial size of background image for hero
	useEffect(() => {
		window.addEventListener('resize',function(){
			sizeHero();
		});
	});

	async function sizeHero() {
		let height = window.innerHeight;
		let width = window.innerWidth;
		let hero = document.getElementById("hero");
		hero.style.width = width;
		hero.style.height = height + 200;
	}

	return(
		<div className="h-screen w-full">
            <ToastContainer />
			<BodegaHero />
			<div id="hero" className="hero-gradient" >
				<div className="md:hidden uppercase text-white text-center font-moriston md:pt-[6rem] laptop:pt-[12rem] px-2 py-4 w-full inline-block">
					<h1 className="text-sm sm:text-2xl md:text-2xl laptop:text-4xl uppercase font-bold mb-2 text-yellow-main font-moriston-bold tracking-dream">Dream Chaser: 17%</h1>
					<p className="text-3xl sm:text-xl md:text-5xl laptop:text-7xl mt-2 mb-1 ml-2 tracking-juice font-moriston-light">Juice Box</p>
					<p className="text-sm md:text-2xl laptop:text-4xl max-w-5xl tracking-light font-moriston-light">Everyone Wants The Juice</p>
				</div>
				<div className="hero-text-container hidden md:inline-block max-4 uppercase text-white text-center font-moriston md:pt-[2rem] laptop:pt-[4rem] pl-10">
					<h1 className="text-xl sm:text-2xl md:text-2xl laptop:text-4xl uppercase font-bold mb-2 text-yellow-main font-moriston-bold tracking-dream">Dream Chaser: 17%</h1>
					<p className="text-lg sm:text-xl md:text-5xl laptop:text-7xl mt-6 mb-3 max-w-5xl tracking-juice font-moriston-light">Juice Box</p>
					<p className="text-lg md:text-2xl laptop:text-4xl max-w-5xl tracking-light font-moriston-light">Everyone Wants The Juice</p>
				</div>
				<div className="hero-bg-container">
					<img className="md:mt-[-5rem] laptop:mt-[-10rem]" src={heroJuiceBg.src} />	
				</div>
			</div>

			<hr className="hero-separator"></hr>

			<div className="relative mint-section p-2 md:p-0">
				<p id="section_text_1" className="text-lg text-center sm:text-xl md:text-2xl max-w-5xl  m-auto text-dark-blue">
					FREE MINT FOR "THE PLUG" HOLDERS <br/>
					WHO'VE REACHED <strong>DREAM CHASER LEVEL</strong>
				</p>
				<p id="section_text_2" className="text-lg text-center text-dark-blue sm:text-xl md:text-2xl my-6 max-w-5xl m-auto">
					<strong>HOLDING MORE PLUGS INCREASES THE ODDS <br/>
					TO MINT A RARE NFT</strong>
				</p>
				<p id="section_text_3" className="text-lg text-center sm:text-xl md:text-2xl my-6 max-w-5xl m-auto text-gray-blue">
					ONLY ONE JUICE BOX PER WALLET
				</p>
				<div className="flex flex-col justify-center items-center md:flex-row">
					<div className="w-full my-2">
						<Image
							src={redBox}
							layout="responsive"
							objectFit="cover"
						/>
					</div>
					<div className="w-full my-2">
						<Image
							src={blueBox}
							layout="responsive"
							objectFit="cover"
						/>
					</div>
					<div className="w-full my-2">
						<Image
							src={greenBox}
							layout="responsive"
							objectFit="cover"
						/>
					</div>
					<div className="w-full my-2">
						<Image
							src={yellowBox}
							layout="responsive"
							objectFit="cover"
						/>
					</div>
				</div>
			</div>

			<div id="mint_button_container" className="py-8 md:py-12">
				<div className="py-4 text-center">
					<div className="btn-container">
						<a href="https://opensea.io/collection/juicebox-by-logik" className="btn btn-wide font-moriston-light juice-btn text-xl text-white hover:opacity-75">
							Buy on OpenSea
						</a>
						<hr className="btn-light-yellow-bar"></hr>
						<hr className="btn-yellow-bar"></hr>
						<hr className="btn-orange-bar"></hr>
						<hr className="btn-red-bar"></hr>
						<hr className="btn-pink-bar"></hr>
					</div>
				</div>
				<p className='text-dark-blue text-center'>Minting Closed</p>
			</div>

            <div id="about-juice" className="bg-[#d2e9f3] text-dark-blue py-8 md:py-12">
                <h1 className="text-center text-3xl font-moriston-bold mb-8">About Juice Box</h1>
                <div className="px-8 md:px-24 xl:px-48 text-md md:text-lg font-moriston text-center">
                    <p>The Juice Box is a symbol of the child-like wonder that encourages us to maintain curiosity about the world and feel a sense of infinite possibilities. In life, it’s easy to get bogged down by systemic obstacles, family expectations, or social norms. Juice refers to the skills and social connections needed to succeed and thrive. When living in your truth and progressing in your personal journey, your juice is a passport to mindset-expanding experiences which in turn can inspire your family and community.
                    <br/> <br/>The Juice Box project is social commentary on food deserts and the marketing that targets the Black community in low-income neighborhoods. Quick fixes like sweet drinks, chips, and instant noodles do not provide real nutrition. Adults who lack a nutrient-rich diet find themselves in a vicious circle of declining health and wealth. Food deserts are a structural impediment to the social advancement of those affected because brains cannot function optimally without proper fuel; skills and social capital will not increase when one cannot put the mind to its best use. As one’s “juice” increases, so too does access to high-quality nutrition, creating a virtuous cycle. 
                    <br/> <br/>Each Juice Box indicates its nutritional value on its packaging. Those with the highest nutrition are the most rare NFTs – in the same way that those in society with the greatest resources can obtain the best nutrition, healthcare, physical fitness, social life, and living environment to maximize health and wealth. </p>
                </div>
            </div>

			<Footer />
		</div>
	)
}

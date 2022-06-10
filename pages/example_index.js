import Head from 'next/head'
import { ethers } from 'ethers'
import Image from 'next/image'
import thePlug from '../public/plug_logo.png'
import battery from '../public/battery.gif'
import hodl from '../public/hodl.png'
import Roadmap from '../components/Roadmap'
import juiceMeter from '../public/juice_meter.png'
import Features from '../components/Features'
import { Footer } from '../components/Footer'
import kasbeer from '../public/kasbeer.png'
import { useState, useEffect } from 'react'
import { connectWallet, mintNFT, getMintedCount } from '../utils/Interact.js'
import { Navbar } from '../components/Navbar'
import NextHead from '../components/NextHead'
import heroBg from '../public/hero_bg.png'

import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export default function Home() {

	const [isConnected, setConnectedStatus] = useState(false);
	const [walletAddress, setWallet] = useState("");
	const [mintAmount, setMintAmount] = useState(1);
	const [status, setStatus] = useState("");
	const [totalMinted, setTotalMinted] = useState(0);


	// React hook that is called after your component is rendered
	useEffect(() => {
		async function fetchData() {
			if (window.ethereum) {
				try {
					// Get MetaMask wallet
					const accounts = await window.ethereum.request({ method: "eth_accounts" });
					// Set status
					if (accounts.length) {
						setConnectedStatus(true);
						setWallet(accounts[0]);
						getMintData();
					} else {
						setConnectedStatus(false);
						setStatus("🦊 Connect to Metamask using the top right button.");
					}
				} catch {
					setConnectedStatus(false);
					setStatus(
						"🦊 Connect to Metamask using the top right button. " +
						walletAddress
					);
				}
			}
		}
		fetchData();
	}, [totalMinted]);

	const connectWalletPressed = async () => {
		const walletResponse = await connectWallet();
		setConnectedStatus(walletResponse.connectedStatus);
		setStatus(walletResponse.status);
		setWallet(walletResponse.address);
		if (isConnected) {
			setWallet(walletAddress);
			// checkForWhiteList();
		}
	};


	const getMintData = async () => {
		const currentMintCount = await getMintedCount();
		setTotalMinted(currentMintCount);
	}


	return (
		<div className="bg-black max-w-full text-white">
			<NextHead />
			<div className="pt-2 relative w-full h-full">
				<Image
					src={heroBg}
					layout="fill"
					objectFit="cover"
				/>
				<img src={thePlug.src} className="relative w-full md:w-1/2 xl:w-1/3 m-auto pt-12" alt="the plug by logik" />
				<div className="relative mx-4 text-center text-white">
					<p className="font-bold text-lg sm:text-xl md:text-2xl my-6 max-w-5xl m-auto">LOGIK left St. Louis in pursuit of a dream. Arriving on the scene in Chicago as a fly on the wall, he navigated the underground art scene and rose within corporate America as an innovator. Now he is a cross-disciplinary alchemist minting gold connections among the next generation of visionaries.</p>
					<h1 className="text-xl sm:text-2xl md:text-3xl uppercase font-bold mb-2">How it works</h1>
					<p className="text-lg md:text-xl max-w-5xl m-auto">LOGIK becomes "The Plug" to holders of this NFT, which is programmed to provide increasing benefits (“juice”) the longer it is held. The juice level continuously increases every two months while it is held in your wallet. It will maintain a full charge forever once it reaches 100%. However, the juice level reverts to 1% when the NFT is sold if maximum juice has not been reached.
					</p>
					<img src={battery.src} className="w-1/2 md:w-1/5 m-auto mt-10" alt="gif of a battery charging" />
					<img src={hodl.src} className="w-3/4 md:w-1/4 m-auto" alt="hodl. gain juice. get plugs" />
					{isConnected ? (<div>
						<div className="pb-8">
							<button className="cursor-not-allowed btn btn-lg bg-gray-roadmap-bg text-yellow-main">SOLD OUT</button>
						</div>
						<p className="text-xl pb-10" >{totalMinted}/888 MINTED</p>
					</div>) : (
						<div className="pb-8">
							<button onClick={connectWalletPressed} className="btn bg-yellow-main btn-wide text-black text-xl">connect wallet</button>
						</div>
					)}

				</div>

			</div>
			<Roadmap />
			<Features />
			<div id="juice" className="text-center py-2">
				<img className="m-auto w-full md:w-1/2 xl:w-2/5" src={juiceMeter.src} />
				<a href="https://twitter.com/satoshigoat">
					<img src={kasbeer.src} className="m-auto w-1/2 md:w-1/5" />
				</a>
			</div>
			<div className="text-center">
			</div>
			<Footer showLogik />
		</div>
	)
}

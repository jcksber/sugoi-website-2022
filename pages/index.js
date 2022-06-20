import sugoiKeyAbi from '../utils/sugoi_key_aboi.json';
import plugAbi from '../utils/plug_abi.json';

import ArtistCarousel from '../components/ArtistCarousel';
import SpeakerCarousel from '../components/SpeakerCarousel';
import HostCarousel from '../components/HostCarousel';
import PerformersCarousel from '../components/PerformersCarousel';
import NavbarMenu from '../components/NavbarMenu';
import EventsSchedule from '../components/EventsSchedule';
import Sponsors from '../components/Sponsors';

import sugoiBanner from '../public/sugoi_banner.jpg';
import dottedLine from '../public/dot_line.png';
import logikFlowers from '../public/placeholder1.png';
import frensKey from '../public/sugoi_keys_tomodachi.jpeg';
import plugKey from '../public/sugoi_keys_plugholders.jpeg';
import hustlerKey from '../public/sugoi_keys_hustler.jpeg';
import footerSugoi from '../public/sugoi_footer-01.png';
import footerLogik from '../public/logik_peach-01.png';


import { config } from "@fortawesome/fontawesome-svg-core";
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ethers, utils, BigNumber } from 'ethers';
import { useEthers } from '@usedapp/core';

config.autoAddCss = false;

export default function Home() {

    /* CONNECTION TO NETWORK */
    const { activateBrowserWallet, account } = useEthers();

    /* NECESSARY ERC-721 STATIC DATA */
    const KEY_ADDRESS = "0x8088f4612eaDB9d60D5C8Abf4a9D0FDfC3dF2f1E";
    const KEY_ABI = new utils.Interface(sugoiKeyAbi);
    const PLUG_ADDRESS = "0x2Bb501A0374ff3Af41f2009509E9D6a36D56A6c0";
    const PLUG_ABI = new utils.Interface(plugAbi);

    /* WEB3 FUNCTIONALITY */
    const [numKeys, setKeyCount] = useState(0);
    const [numPlugs, setPlugCount] = useState(0);
    const [keyQuantity, setKeyQuantity] = useState("");
	const [plugTid, setPlugTid] = useState("");
	const [ownerOfPlugTid, setOwnerOfPlugTid] = useState("");

    /*UI FUNCTIONALITY*/
    const [viewArtists, setViewArtists] = useState(false);
    const [viewPerformers, setViewPerformers] = useState(false);
    const [viewHosts, setViewHosts] = useState(true);
    const [viewSpeakers, setViewSpeakers] = useState(false);
    

    useEffect(() => {
        if (!window.ethereum) {
            toast("Download Metamask!");
        }
        if (account) {
			setKeyCount(getNumKeys());
            setPlugCount(getNumPlugs());
		}
        console.log("num keys: " + numKeys);
        console.log("num plugs: " + numPlugs);
    }, [account]);

    // Obtain the number of Keys in connected wallet
	const getNumKeys = async () => {
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		const keyContract = await new ethers.Contract(
			KEY_ADDRESS,
			KEY_ABI,
			signer
		);
		const numKeys = await keyContract.balanceOf(account);
        setKeyCount(parseInt(numKeys.toHexString(), 16));
		return parseInt(numKeys.toHexString(), 16);
	};

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

    const viewArtistsClicked = async () => {
        if (!viewArtists) {
            setViewArtists(true);
            setViewPerformers(false);
            setViewHosts(false);
            setViewSpeakers(false);
        }
    }
    const viewPerformersClicked = async () => {
        if (!viewPerformers) {
            setViewArtists(false);
            setViewPerformers(true);
            setViewHosts(false);
            setViewSpeakers(false);
        }
    }
    const viewHostsClicked = async () => {
        if (!viewHosts) {
            setViewArtists(false);
            setViewPerformers(false);
            setViewHosts(true);
            setViewSpeakers(false);
        }
    }
    const viewSpeakersClicked = async () => {
        if (!viewSpeakers) {
            setViewArtists(false);
            setViewPerformers(false);
            setViewHosts(false);
            setViewSpeakers(true);
        }
    }

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

    const claimSugoiKey = async () => {
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
            let txn = "";
            if (numPlugs > 0) {
                try {
                    const owner = await plugContract.ownerOf(BigNumber.from(plugTid));
			        setOwnerOfPlugTid(owner);
                } catch (error) {
                    toast("You don't seem to own that Plug token ID");
                    console.log(error.message);
                    return;
                }
                if (keyQuantity <= 0) {
                    toast("Must enter a valid # of keys to claim");
                    return;
                } else if (keyQuantity > 5 && numPlugs < keyQuantity) {
                    toast("You don't have enough Plugs to claim that many keys");
                    return;
                } else if (ownerOfPlugTid != account && ownerOfPlugTid != "") {
                    toast("You don't own that Plug ID!");
                    return;
                } else {
                    txn = await keyContract.claim(account, keyQuantity, plugTid);
                }
            } else if (numKeys > 0) {
                toast("WARNING: if you don't own a Plug, you can only claim 1 key");
            }
            //execute transaction to claim
            txn = await keyContract.publicClaim(account);
			return {
				success: true,
				status: "✅ Check out your transaction on Etherscan: https://etherscan.io/tx/" + txn.hash
			}
		} catch (error) {
			toast("Something went wrong :(")
            console.log(error.message);
			return {
				success: false,
				status: "😥 Something went wrong: " + error.message
			}
		}
	};

    return (
        <div id="sugoi" className="max-w-full">
            <NavbarMenu />
            {/* sugoi by logik section  */}
            <div id="bylogik" className="section text-olive-green">
                <h1 className="header">
                    SUGOI BY LOGIK<br/>
                    AT NFT NYC 2022,<br/>
                    JUNE 21-23
                </h1>
                <h5 id="location" className="sub-header text-olive-green">LOCATION</h5>
                <ul className="body text-olive-green">
                    <li>THE MODE, 65 Jay St</li>
                    <li>Brooklyn, NY 11201</li>
                </ul>
                <h5 id="details" className="sub-header text-olive-green">DETAILS</h5>
                <ul className="body text-olive-green">
                    <li>
                        3 days of events including<br/>
                        informative panels, live music,<br/>
                        immersive NFT art, and minting<br/>
                        IRL connections with web3 homies
                    </li>
                </ul>
                {account && 
                 numPlugs == 0 && 
                 <button id="mint" onClick={claimSugoiKey} className="long-btn bg-yellow">NEED A KEY? MINT</button>
                }
                {account &&
                 numPlugs >= 1 &&
                 <div id="claim-container">
                    <input id="hidden-input" autocomplete="false" name="hidden" value="none"></input>
                    <input autoComplete="none" placeholder="# Keys" onChange={handleQuantityChange} value={keyQuantity} className="claim-field"></input>
	                <input autoComplete="none" placeholder="Plug ID" onChange={handlePlugTidChange} value={plugTid} className="claim-field"></input>
                    <button onClick={claimSugoiKey} className="claim-field long-btn bg-yellow">CLAIM</button>
                 </div>
                }
                {!account && <button id="connect" onClick={() => activateBrowserWallet()} className="long-btn bg-yellow">CONNECT TO GAIN ACCESS</button>}
                <a href="https://nftaccess.app/event/sugoi-nft-nyc-2022" id="rsvp" className="long-btn bg-yellow">HAVE A KEY? RSVP</a>
                <a href="" id="digital-swag" className="long-btn bg-yellow">DIGITAL SWAG BAG (COMING SOON)</a>
                <p id="disclaimer">*RSVP DOES NOT GUARANTEE ENTRY</p>
                <div id="logik-flowers" className="img-container">
                    <img src={logikFlowers.src} />
                </div>
            </div>

            <div className="dotted-line img-container">
                <img src={dottedLine.src} />
            </div>
            {/* featured artists section */}
            <div id="artists" className="section text-olive-green">
                <h1 className="header">FEATURING</h1>
                <button id="view-hosts" onClick={viewHostsClicked} className={ viewHosts ? 'long-btn bg-yellow' : 'long-btn bg-peach'}>HOSTS</button>
                <button id="view-speakers" onClick={viewSpeakersClicked} className={ viewSpeakers ? 'long-btn bg-yellow' : 'long-btn bg-peach'}>SPEAKERS</button>
                <button id="view-artists" onClick={viewArtistsClicked} className={ viewArtists ? 'long-btn bg-yellow' : 'long-btn bg-peach'}>ARTISTS</button>
                <button id="view-performers" onClick={viewPerformersClicked} className={ viewPerformers ? 'long-btn bg-yellow' : 'long-btn bg-peach'}>PERFORMERS</button>
                { viewArtists && <ArtistCarousel /> }
                { viewPerformers && <PerformersCarousel /> }
                { viewHosts && <HostCarousel /> }
                { viewSpeakers && <SpeakerCarousel /> }
            </div>

            <div className="dotted-line img-container">
                <img src={dottedLine.src} />
            </div>

            {/* event schedule section */}
            <EventsSchedule />
            
            <div className="dotted-line img-container">
                <img src={dottedLine.src} />
            </div>

            {/* tickets and merch  */}
            <div id="tickets" className="section">
                <div className="vh">
                    <h1 className="header text-olive-green">
                        TICKETS<br/>
                        AND<br/>
                        MERCH
                    </h1>
                    {account && 
                     numPlugs == 0 && 
                     <button id="mint" onClick={claimSugoiKey} className="long-btn bg-yellow">NEED A KEY? MINT</button>
                    }
                    {account &&
                     numPlugs >= 1 &&
                     <div id="claim-container">
                        <input id="hidden-input" autocomplete="false" name="hidden"></input>
                        <input placeholder="# Keys" onChange={handleQuantityChange} value={keyQuantity} className="claim-field"></input>
                        <input placeholder="Plug ID" onChange={handlePlugTidChange} value={plugTid} className="claim-field"></input>
                        <button onClick={claimSugoiKey} className="claim-field long-btn bg-yellow">CLAIM</button>
                     </div>
                    }
                    {!account && <button id="connect" onClick={() => activateBrowserWallet()} className="long-btn bg-yellow">CONNECT TO GAIN ACCESS</button>}
                    <a href="https://nftaccess.app/event/sugoi-nft-nyc-2022" id="rsvp" className="long-btn bg-yellow">HAVE A KEY? RSVP</a>
                    <a href="https://sugoi.global/digital-swag-bag" id="digital-swag" className="long-btn bg-yellow">DIGITAL SWAG BAG (COMING SOON)</a>
                </div>
                <div className="vh">
                    <div id="frens" className="ticket-container text-olive-green">
                        <a href="https://opensea.io/collection/sugoi-nft-nyc-2022">
                            <div className="img-container">
                                <img src={frensKey.src}/>
                            </div>
                            <h5 className="sub-header">FRENS</h5>
                            <p className="body">
                                General Admission
                            </p>
                        </a>
                    </div>
                    <div id="plug" className="ticket-container text-olive-green">
                        <a href="https://opensea.io/collection/sugoi-nft-nyc-2022">
                            <div className="img-container">
                                <img src={plugKey.src}/>
                            </div>
                            <h5 className="sub-header">PLUGS</h5>
                            <p className="body">
                                Plug NFT Holders Only
                            </p>
                        </a>
                    </div>
                    <div id="hustler" className="ticket-container text-olive-green">
                        <a href="https://opensea.io/collection/sugoi-nft-nyc-2022">
                            <div className="img-container">
                                <img src={hustlerKey.src}/>
                            </div>
                            <h5 className="sub-header">HUSTLERS</h5>
                            <p className="body">
                                Plug (Hustler) NFT Holders Only
                            </p>
                        </a>
                    </div>
                </div>
            </div>

            {/* sponsors section */}
            <Sponsors />

            <div id="contact" className="section text-olive-green">
                <h1 className="header">CONTACT US</h1>

                <h5 className="sub-header">GENERAL</h5>
                <p className="body"><a href="mailto:logik@studiologik.io">logik@studiologik.io</a></p>

                <h5 className="sub-header">SPONSORS/BRAND PARTNERS</h5>
                <p className="body"><a href="mailto:bernielevv@gmail.com">bernielevv@gmail.com</a></p>
            </div>

            <div id="footer" className="section bg-olive-green">
                <div className="hero-banner">
                    <div className="img-container">
                        <img src={sugoiBanner.src} />
                    </div>
                </div>
                <div id="sugoi-logo" className="img-container">
                    <img src={footerSugoi.src} />
                </div>
                <div id="logik-logo" className="img-container">
                    <img src={footerLogik.src} />
                </div>
                <p className="text-peach">
                    Sugoi connects Web3 and Big Tech to the Culture<br/>
                    (C) 2022 LOGIK Studios. All rights reserved.<br/>
                    Brand architecture by <a href="https://twitter.com/ennischung" className="text-orange">@ennischung</a><br/>
                    Frontend & NFT by <a href="https://twitter.com/satoshigoat" className="text-orange">@satoshigoat</a>
                </p>
            </div>

        </div>
    )
}

















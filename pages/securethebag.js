import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import sugoiKeyAbi from '../utils/sugoi_key_aboi.json';
import NavbarMenu from '../components/NavbarMenu';
import sugoiBanner from '../public/sugoi_banner.jpg';
import footerSugoi from '../public/sugoi_footer-01.png';
import footerLogik from '../public/logik_peach-01.png';
import swagBagImg from '../public/swag-bag-img.png';
import { config } from "@fortawesome/fontawesome-svg-core";
import { useEthers } from '@usedapp/core';
import { ethers, utils } from 'ethers';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Web3 from 'web3';

const EthereumDarkblockWidget = dynamic(() => import('@darkblock.io/eth-widget'), { ssr: false })

config.autoAddCss = false;

export default function SecureTheBag() {

    /* CONNECTION TO NETWORK */
    const { activateBrowserWallet, account } = useEthers();

    /* NECESSARY ERC-721 STATIC DATA */
    const KEY_ADDRESS = "0x8088f4612eaDB9d60D5C8Abf4a9D0FDfC3dF2f1E";
    const KEY_ABI = new utils.Interface(sugoiKeyAbi);

    /* WEB3 FUNCTIONALITY */
    const [keyBalance, setKeyBalance] = useState(0);

    /* NFT TOKEN */
    const [nftToken, setNftToken] = useState('');
    const [w3, setW3] = useState(null);
    const [token, setToken] = useState(null);

    async function loadWeb3Adapter() {
        if (window.ethereum) {
            try {
                let web3 = new Web3(window.ethereum);
                setW3(web3);

            } catch (error) {
                setW3(null);
            }
        }
    }

    useEffect(async () => {
        await loadWeb3Adapter();
    }, []);

    useEffect(() => {
        if (!window.ethereum)
            toast("You need a blockchain wallet!");
        if (account)
            getKeyBalance();
    }, []);

    const buildDBContent = () => {
        setToken(null);
        if (nftToken) {
          setTimeout(() => {
              setToken(nftToken);
          }, 500);

        } else {
          setToken(null);
        }
    }

    const getKeyBalance = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const keyContract = await new ethers.Contract(
            KEY_ADDRESS,
            KEY_ABI,
            signer
        );
        const numKeys = await keyContract.balanceOf(account);
        setKeyBalance(numKeys);

		return parseInt(numKeys.toHexString(), 16);
    }

    const dbConfig = {
        customCssClass: '', // pass here a class name you plan to use
        debug: false, // debug flag to console.log some variables
        imgViewer: {
            // image viewer control parameters
            showRotationControl: true,
            autoHideControls: true,
            controlsFadeDelay: true,
        },
    }

    return (
        <div id="sugoi" className="max-w-full">
            <NavbarMenu/>
            <div id="swagbox" className="section">
                <div id="swag-bag-img" className="img-container">
                    <img src={swagBagImg.src} />
                </div>
                <h1 className="header text-olive-green">
                    DIGITAL SWAG BAG
                </h1>

                {/* not connected */}
                {!account && <button id="connect" onClick={() => activateBrowserWallet()} className="long-btn bg-yellow">CONNECT TO GAIN ACCESS</button>}

                {/* connected, no sugoi keys */}
                {account && keyBalance <= 0 &&
                <div>
                    <h5 className="text-peach sub-header">YOU NEED A SUGOI KEY (NFT) TO ACCESS DIGITAL SWAG BAG</h5>
                    <p className="text-olive-green body">
                        If you don't have a key yet, they're now open to the public and can be claimed on the <a href="https://sugoi.global#tickets" className="text-peach">home page</a>.
                    </p>
                </div>
                }

                {/* connected and has sugoi key */}
                {w3 && account &&
                    <div id="vault" className="w-full">
                        <h2 className="text-xl font-bold mb-2 text-peach">As an owner of a key, you have access to our Digital Swag
                            Bag (provided by Darkblock.io).
                        </h2>
                        <p className="mb-4 text-dark-grey">The Swag Bag contents can only be unlocked by the owner of the key.</p>
                        <input
                            className="mb-4 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="tokenId"
                            type="text"
                            placeholder="Sugoi Key ID"
                            onChange={(e) => setNftToken(e.target.value)}
                        />
                        <button
                            className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={() => buildDBContent()}
                        >
                            Grab Your Swag
                        </button>
                        {w3 && KEY_ADDRESS && token && (
                          <EthereumDarkblockWidget contractAddress={KEY_ADDRESS} tokenId={token} w3={w3} cb={() => {}} config={dbConfig} />
                        )}
                    </div>
                }
            </div>
            <div id="pics">
                <iframe src="https://logik.pixieset.com/sugoinftnyc2022/" title="SUGOI 2022 photo gallery"></iframe>
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
    );
}
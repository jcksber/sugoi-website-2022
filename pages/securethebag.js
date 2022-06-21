import sugoiKeyAbi from '../utils/sugoi_key_aboi.json';

import NavbarMenu from '../components/NavbarMenu';

import { config } from "@fortawesome/fontawesome-svg-core";
import { useState, useEffect } from 'react'
import { useEthers } from '@usedapp/core';
import { ethers, utils } from 'ethers';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

config.autoAddCss = false;

export default function SecureTheBag() {

    /* CONNECTION TO NETWORK */
    const { activateBrowserWallet, account } = useEthers();

    /* NECESSARY ERC-721 STATIC DATA */
    const KEY_ADDRESS = "0x8088f4612eaDB9d60D5C8Abf4a9D0FDfC3dF2f1E";
    const KEY_ABI = new utils.Interface(sugoiKeyAbi);

    /* WEB3 FUNCTIONALITY */
    const [keyBalance, setKeyBalance] = useState(0);

    useEffect(() => {
        if (!window.ethereum)
            toast("You need a blockchain wallet!");
        if (account)
            getKeyBalance();
    });

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

    return (
        <div id="sugoi" className="max-w-full">
            <NavbarMenu/>
            <div id="swagbox" className="section">
                <h1 className="header text-olive-green">
                    DIGITAL SWAG BAG
                </h1>

                {/* not connected */}
                {!account && <button id="connect" onClick={() => activateBrowserWallet()} className="long-btn bg-yellow">CONNECT TO GAIN ACCESS</button>}

                {/* connected, no sugoi keys */}
                {account && keyBalance <= 0 &&
                <div>
                    <h5 className="text-peach sub-header">YOU NEED A SUGOI KEY (NFT) TO ACCESS DIGITIAL SWAG BAG</h5>
                    <p className="text-olive-green body">
                        If you don't have a key yet, they're now open to the public and can be claimed on the <a href="https://sugoi.global#tickets" className="text-peach">home page</a>.
                    </p>
                </div>
                }

                {/* connected and has sugoi key */}
                {account && keyBalance > 0 &&
                // <div id="vault">
                //     <iframe src="https://staging.darkblock.io/platform/eth/wl/0x8088f4612eaDB9d60D5C8Abf4a9D0FDfC3dF2f1E/0" title="darkblock"></iframe>
                // </div>
                <div id="vault">
                    <iframe src="https://staging.darkblock.io/platform/eth/wl/0x495f947276749ce646f68ac8c248420045cb7b5e/1"></iframe>
                </div>
                }
            </div>
        </div>
    );
}
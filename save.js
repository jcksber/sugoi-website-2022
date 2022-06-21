{/* swag bag (darkblock vault) */}
    <div id="" className="section text-olive-green">
        <h1 className="header">
            DIGITAL SWAG BAG
        </h1>

        {/* not connected */}
        {!account && <button id="connect" onClick={() => activateBrowserWallet()} className="long-btn bg-yellow">CONNECT TO GAIN ACCESS</button>}

        {/* connected, no key token id */}
        {account && keyTid == null &&
        <div>
            <input autoComplete="none" placeholder="Sugoi Key ID" onChange={handleKeyTidChange} value={keyTid} className="claim-field"></input>
        </div>
        }

        {/* connected and valid token id */}
        {account && keyTid != null &&
        <div id="vault">
            <EthereumDarkblockWidget
            contractAddress={KEY_ADDRESS}
            tokenId={keyTid}
            w3={provider}
            cb={(p) => console.log(p)}
            config={config}
            />
        </div>
        } 
    </div>




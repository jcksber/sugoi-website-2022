
import twGrey from '../public/twitter_grey-01.png';
import darkblockLogo from '../public/sponsors/DarkBlock.png';
import americana from '../public/sponsors/Americana.png';
import treetrunk from '../public/sponsors/Treetrunk.png';
import altLogo from '../public/sponsors/ALT.png';
import allSmilesLogo from '../public/sponsors/AllSmilesss.png';
import cortexLogo from '../public/sponsors/CortexLogo.png';
import mrAugmentedLogo from '../public/sponsors/Augmented.png';
import sunriseLogo from '../public/sponsors/Sunrise.png';
import blueLogo from '../public/sponsors/Blue.png';
import crwnmagLogo from '../public/sponsors/Crwnmag.png';
import sabetLogo from '../public/sponsors/Sabet.png';

export default function Sponsors() {
    return (
        <div id="sponsors" className="section text-dark-grey">
            <h1 className="header">
                THANK YOU TO<br/>
                OUR SPONSORS
            </h1>
            <div className="row">
                <div className="col-100">
                    <div className="img-container">
                        <img src={treetrunk.src} />
                    </div>
                    <p className="body">
                    The first multi-party royalty-bearing NFT.  The TreeTrunk approach was conceived by ConsenSys Mesh group executive John Wolpert. 
                    </p>
                    <a href="https://twitter.com/TreeTrunkNFT" className="social">
                        <div className="img-container">
                            <img src={twGrey.src} />
                        </div>
                    </a>
                </div>
                <div className="col-100">
                    <div className="img-container">
                        <img src={americana.src} />
                    </div>
                    <p className="body">
                    The first marketplace to buy and sell physical things as NFTs.
                    </p>
                    <a href="https://twitter.com/AmericanaNFT" className="social">
                        <div className="img-container">
                            <img src={twGrey.src} />
                        </div>
                    </a>
                </div>
            </div>
            <div id="second" className="row">
                <div className="col-25">
                    <div className="img-container">
                        <img src={darkblockLogo.src} />
                    </div>
                </div>
                <div className="col-25">
                    <div className="img-container">
                        <img src={altLogo.src} />
                    </div>
                </div>
                <div className="col-25">
                    <div className="img-container">
                        <img src={cortexLogo.src} />
                    </div>
                </div>
                <div className="col-25">
                    <div className="img-container">
                        <img src={allSmilesLogo.src} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <div className="img-container">
                        <img src={sunriseLogo.src} />
                    </div>
                </div>
                <div className="col-25">
                    <div className="img-container">
                        <img src={mrAugmentedLogo.src} />
                    </div>
                </div>
                <div className="col-25">
                    <div className="img-container">
                        <img src={blueLogo.src} />
                    </div>
                </div>
                <div className="col-25">
                    <div className="img-container">
                        <img src={crwnmagLogo.src} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <div className="img-container">
                        <img src={sabetLogo.src} />
                    </div>
                </div>
                {/* <div className="col-25">
                    <div className="img-container">
                        <img src={mrAugmentedLogo.src} />
                    </div>
                </div>
                <div className="col-25">
                    <div className="img-container">
                        <img src={blueLogo.src} />
                    </div>
                </div>
                <div className="col-25">
                    <div className="img-container">
                        <img src={crwnmagLogo.src} />
                    </div>
                </div> */}
            </div>
        </div>
    )
}
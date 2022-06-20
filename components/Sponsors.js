
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
import gianniLeeLogo from '../public/sponsors/gianni_lee_site.png';
import themodeLogo from '../public/sponsors/themode_logo.png';
import newfriendtech from '../public/sponsors/newfriendtech.png';

export default function Sponsors() {
    return (
        <div id="sponsors" className="section text-dark-grey">
            <h1 className="header">
                THANK YOU TO<br/>
                OUR SPONSORS & PARTNERS
            </h1>
            <div className="row">
                <div className="col-100">
                    <div className="img-container">
                        <a href="https://treetrunk.io/">
                            <img src={treetrunk.src} />
                        </a>
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
                <div id="americana" className="col-100">
                    <div id="logo-container" className="img-container">
                        <a href="https://americana.io/">
                            <img src={americana.src} />
                        </a>
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
                        <a href="https://www.darkblock.io/">
                            <img src={darkblockLogo.src} />
                        </a>
                    </div>
                </div>
                <div className="col-25">
                    <div className="img-container">
                        <a href="https://www.alt.xyz/">
                            <img src={altLogo.src} />
                        </a>
                    </div>
                </div>
                <div className="col-25">
                    <div className="img-container">
                        <a href="https://www.crtx.app/">
                            <img src={cortexLogo.src} />
                        </a>
                    </div>
                </div>
                <div className="col-25">
                    <div className="img-container">
                        <a href="https://www.smilesss.com/">
                            <img src={allSmilesLogo.src} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <div className="img-container">
                        <a href="https://www.sunrise.art/">
                            <img src={sunriseLogo.src} />
                        </a>
                    </div>
                </div>
                <div className="col-25">
                    <div className="img-container">
                        <a href="https://mraugmented.com/">
                            <img src={mrAugmentedLogo.src} />
                        </a>
                    </div>
                </div>
                <div className="col-25">
                    <div className="img-container">
                        <a href="https://www.bluethegreat.com/">
                            <img src={blueLogo.src} />
                        </a>
                    </div>
                </div>
                <div className="col-25">
                    <div className="img-container">
                        <img src={newfriendtech.src} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <div className="img-container">
                        <a href="https://www.sabet.art/">
                            <img src={sabetLogo.src} />
                        </a>
                    </div>
                </div>
                <div className="col-25">
                    <div className="img-container">
                        <img src={gianniLeeLogo.src} />
                    </div>
                </div>
                <div className="col-25">
                    <div className="img-container">
                        <a href="https://www.crwnmag.com/">
                            <img src={crwnmagLogo.src} />
                        </a>
                    </div>
                </div>
                <div className="col-25">
                    <div className="img-container">
                        <img src={themodeLogo.src} />
                    </div>
                </div>
            </div>
        </div>
    )
}
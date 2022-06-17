import { useState, useEffect } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import twGreen from '../public/twitter_green-01.png';
import anitaSadowska from '../public/speakers/AnitaSadowska.jpeg';
import chrisSeline from '../public/speakers/ChrisSeline.png';
import cryptoJeweler from '../public/speakers/CryptoJeweler.jpeg';
import eddieGangland from '../public/speakers/EddieGangland.jpeg';
import ishitaBanerjee from '../public/speakers/IshitaBanerjee.jpeg';
import jiwa from '../public/speakers/Jiwa.jpg';
import jordanMitchell from '../public/speakers/JORDANMITCHELL.JPG';
import mrBrian from '../public/speakers/MrBrianDesign.jpg';
import profits from '../public/speakers/Profits.jpeg';
import terrellJones from '../public/speakers/TerrellJones.jpeg';
import val from '../public/speakers/Val.JPG';
import satoshigoat from '../public/speakers/satoshigoat.png';
import alexAlpert from '../public/speakers/AlexAlpert.jpg';
import benMayorWhite from '../public/speakers/BenMayorWhite.jpg';
import johnWolpert from '../public/speakers/JohnWolpert.jpg';
import sarina from '../public/speakers/SarinaCharugundla.jpg';

const handleDragStart = (e) => e.preventDefault();

const numItems = {
    0: { items: 1 }, 512: { items: 2 }, 728: { items: 3 }, 
    928: { items: 4 }, 1224: { items: 5 }, 1500: {items: 7 }
}

const panelists = [
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={anitaSadowska.src} />
        </div>
        <h5 className="sub-header">ANITA SADOWSKA</h5>
        <p className="body">Photographer</p>
        <a href="https://twitter.com/sadowskaphoto" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={chrisSeline.src} />
        </div>
        <h5 className="sub-header">CHRIS SELINE</h5>
        <p className="body">CEO Darkblock.io</p>
        <a href="https://twitter.com/dumbfounder" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={cryptoJeweler.src} />
        </div>
        <h5 className="sub-header">CRYPTO JEWELER</h5>
        <p className="body"></p>
        <a href="https://twitter.com/cryptojeweler" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={eddieGangland.src} />
        </div>
        <h5 className="sub-header">EDDIE GANGLAND</h5>
        <p className="body">Artist</p>
        <a href="https://twitter.com/eddiegangland" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={ishitaBanerjee.src} />
        </div>
        <h5 className="sub-header">ISHITA BANERJEE</h5>
        <p className="body">Creator Soul Curry Art</p>
        <a href="https://twitter.com/soulcurryart" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={jiwa.src} />
        </div>
        <h5 className="sub-header">JIWA</h5>
        <p className="body">Founder at ntent.art</p>
        <a href="https://twitter.com/dotjiwa" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={jordanMitchell.src} />
        </div>
        <h5 className="sub-header">JORDAN MITCHELL</h5>
        <p className="body">Photographer</p>
        <a href="twitter" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={mrBrian.src} />
        </div>
        <h5 className="sub-header">MR. BRIAN DESIGN</h5>
        <p className="body">Artist at nfty haus</p>
        <a href="https://twitter.com/mrbriandesign" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={satoshigoat.src} />
        </div>
        <h5 className="sub-header">SATOSHIGOAT</h5>
        <p className="body">Dev</p>
        <a href="https://twitter.com/satoshigoat" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={profits.src} />
        </div>
        <h5 className="sub-header">PROFITS</h5>
        <p className="body">CMO/Advisor</p>
        <a href="twitter" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={terrellJones.src} />
        </div>
        <h5 className="sub-header">TERRELL JONES</h5>
        <p className="body">Visual Artist</p>
        <a href="https://twitter.com/terrelldom" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={val.src} />
        </div>
        <h5 className="sub-header">VALCOHOLICS</h5>
        <p className="body">CEP</p>
        <a href="twitter" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={johnWolpert.src} />
        </div>
        <h5 className="sub-header">JOHN WOLPERT</h5>
        <p className="body">Co-Founder of Treetrunk</p>
        <a href="twitter" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={sarina.src} />
        </div>
        <h5 className="sub-header">SARINA</h5>
        <p className="body">Co-Founder of Treetrunk</p>
        <a href="twitter" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={benMayorWhite.src} />
        </div>
        <h5 className="sub-header">BEN MAYOR WHITE</h5>
        <p className="body">Founder Frensco / Former Adidas</p>
        <a href="twitter" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={alexAlpert.src} />
        </div>
        <h5 className="sub-header">ALEX ALPERT</h5>
        <p className="body">Director of NFT Creative - OneOf</p>
        <a href="twitter" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src="" />
        </div>
        <h5 className="sub-header">COMING SOON</h5>
        <p className="body"></p>
        <a href="twitter" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
];

export default function PanelistCarousel() {
    return (
        <AliceCarousel mouseTracking items={panelists} responsive={numItems} />
    )
}
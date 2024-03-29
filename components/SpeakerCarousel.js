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
import mrBrian from '../public/speakers/MrBrianDesign.jpg';
import profits from '../public/speakers/Profits.jpeg';
import terrellJones from '../public/speakers/TerrellJones.jpeg';
import val from '../public/speakers/Val.JPG';
import satoshigoat from '../public/speakers/satoshigoat.jpeg';
import alexAlpert from '../public/speakers/AlexAlpert.jpg';
import benMayorWhite from '../public/speakers/BenMayorWhite.jpg';
import johnWolpert from '../public/speakers/JohnWolpert.jpg';
import takai from '../public/speakers/takaitheartist.jpeg';
import warhodl from '../public/speakers/Warhodl.png';
import mikeMongo from '../public/speakers/MikeMongo.jpg';
import jonahBlake from '../public/speakers/JonahBlake.jpg';
import illaDaProducer from '../public/speakers/IllaDaProducer.jpeg';
import ruffDraft from '../public/speakers/RuffDraft.jpeg';
import quHarrisonTerry from '../public/speakers/QuHarrisonTerry.jpg';
import spottieWifi from '../public/speakers/SpottieWifi.jpeg';
import morgan from '../public/speakers/MorganSarkissian.jpeg';
import vgf from '../public/speakers/vgf.png';
import jr from '../public/speakers/JR.jpeg';
import snax from '../public/speakers/Snax.jpg';
import zoe from '../public/speakers/Zoe.JPG';


const handleDragStart = (e) => e.preventDefault();

const numItems = {
    0: { items: 1 }, 512: { items: 2 }, 728: { items: 3 }, 
    928: { items: 4 }, 1224: { items: 5 }, 1500: {items: 7 }
}

const panelists = [
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
            <img src={johnWolpert.src} />
        </div>
        <h5 className="sub-header">JOHN WOLPERT</h5>
        <p className="body">Co-Founder of TreeTrunk</p>
        <a href="twitter" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={illaDaProducer.src} />
        </div>
        <h5 className="sub-header">ILLA DA PRODUCER</h5>
        <p className="body">Grammy nominated 12x platinum producer</p>
        <a href="https://twitter.com/illaDaProducer" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={morgan.src} />
        </div>
        <h5 className="sub-header">MORGAN SARKISSIAN</h5>
        <p className="body">Content creator</p>
        <a href="https://twitter.com/Helloimmorgan" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={spottieWifi.src} />
        </div>
        <h5 className="sub-header">SPOTTIE WIFI</h5>
        <p className="body">Rapper</p>
        <a href="https://twitter.com/SpottieWiFi" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={vgf.src} />
        </div>
        <h5 className="sub-header">VGF</h5>
        <p className="body">Media & Operations @ PixelVault</p>
        <a href="https://twitter.com/VGFreakXBL" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={zoe.src} />
        </div>
        <h5 className="sub-header">ZOË</h5>
        <p className="body">Artist</p>
        <a href="https://twitter.com/ZStekkel" className="social">
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
        <p className="body">Artist</p>
        <a href="https://twitter.com/cryptojeweler" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={jr.src} />
        </div>
        <h5 className="sub-header">JR</h5>
        <p className="body">Founder</p>
        <a href="https://twitter.com/JRArtSpace_NFT" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={jonahBlake.src} />
        </div>
        <h5 className="sub-header">JONAH BLAKE</h5>
        <p className="body">Chief Gaming Officer / Founder</p>
        <a href="https://twitter.com/RealJonahBlake" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
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
            <img src={ruffDraft.src} />
        </div>
        <h5 className="sub-header">RUFF DRAFT</h5>
        <p className="body">Photographer / Technologist @ Google</p>
        <a href="https://twitter.com/RUFF_DRAFT" className="social">
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
        <p className="body">CTO of SUGOI</p>
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
        <a href="https://mobile.twitter.com/_ShaniceBest" className="social">
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
        <a href="https://twitter.com/valcoholics1" className="social">
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
        <a href="https://twitter.com/alexalpert6" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={takai.src} />
        </div>
        <h5 className="sub-header">TAKAI THE ARTIST</h5>
        <p className="body">Storyteller</p>
        <a href="https://twitter.com/takaitheartist" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={warhodl.src} />
        </div>
        <h5 className="sub-header">WARHODL</h5>
        <p className="body">Decentralized pop artist</p>
        <a href="https://twitter.com/WARHODL" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={mikeMongo.src} />
        </div>
        <h5 className="sub-header">MIKE MONGO</h5>
        <p className="body">Astronat Teacher</p>
        <a href="https://twitter.com/MikeMongo" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={quHarrisonTerry.src} />
        </div>
        <h5 className="sub-header">QU HARRISON TERRY</h5>
        <p className="body">Author / Marketer</p>
        <a href="https://twitter.com/quharrison" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={snax.src} />
        </div>
        <h5 className="sub-header">SNAX</h5>
        <p className="body">Pizza DAO / RarePizzas</p>
        <a href="https://twitter.com/snack_man" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>
];

export default function PanelistCarousel() {
    return (
        <AliceCarousel mouseTracking items={panelists} responsive={numItems} />
    )
}
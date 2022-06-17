import { useState, useEffect } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import igGreen from '../public/instagram_green-01.png';
import twGreen from '../public/twitter_green-01.png';
import sabet from '../public/artists/Sabet.jpeg';
import gianniLee from '../public/artists/GianniLee.jpeg';
import waheed from '../public/artists/Waheed.jpeg';
// import gabe from '.../public/artists/GabeWeis.jpeg';

const handleDragStart = (e) => e.preventDefault();

const numItems = {
    0: { items: 1 }, 512: { items: 2 }, 728: { items: 3 }, 
    928: { items: 4 }, 1224: { items: 5 }, 1500: {items: 7 }
}

const artists = [
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={waheed.src} />
        </div>
        <h5 className="sub-header">WAHEED ZAI</h5>
        <p className="body">Artist all smilesss</p>
        <a href="https://twitter.com/all_smilesss" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={sabet.src} />
        </div>
        <h5 className="sub-header">SABET</h5>
        <p className="body">Artist</p>
        <a href="https://twitter.com/sabet" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={gianniLee.src} />
        </div>
        <h5 className="sub-header">GIANNI LEE</h5>
        <p className="body">Artist / Futurist</p>
        <a href="https://twitter.com/giannilee" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src="" />
        </div>
        <h5 className="sub-header">GABE WEISE</h5>
        <p className="body">Resilient Cubist</p>
        <a href="" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
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
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
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
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
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
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
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
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
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
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
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
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
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
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
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
    </div>
];

export default function ArtistCarousel() {
    return (
        <AliceCarousel mouseTracking items={artists} responsive={numItems} />
    )
}
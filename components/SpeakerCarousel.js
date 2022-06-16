import { useState, useEffect } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import igGreen from '../public/instagram_green-01.png';
import twGreen from '../public/twitter_green-01.png';

const handleDragStart = (e) => e.preventDefault();

const numItems = {
    0: {
        items: 1
    },
    512: {
        items: 2
    },
    728: {
        items: 3
    },
    928: {
        items: 4
    },
    1224: {
        items: 5
    }
}

const panelists = [
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
        <a href="ig" className="social">
            <div className="img-container">
                <img src={igGreen.src} />
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
        <a href="ig" className="social">
            <div className="img-container">
                <img src={igGreen.src} />
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
        <a href="ig" className="social">
            <div className="img-container">
                <img src={igGreen.src} />
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
        <a href="ig" className="social">
            <div className="img-container">
                <img src={igGreen.src} />
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
        <a href="ig" className="social">
            <div className="img-container">
                <img src={igGreen.src} />
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
        <a href="ig" className="social">
            <div className="img-container">
                <img src={igGreen.src} />
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
        <a href="ig" className="social">
            <div className="img-container">
                <img src={igGreen.src} />
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
        <a href="ig" className="social">
            <div className="img-container">
                <img src={igGreen.src} />
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
        <a href="ig" className="social">
            <div className="img-container">
                <img src={igGreen.src} />
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
        <a href="ig" className="social">
            <div className="img-container">
                <img src={igGreen.src} />
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
        <a href="ig" className="social">
            <div className="img-container">
                <img src={igGreen.src} />
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
        <a href="ig" className="social">
            <div className="img-container">
                <img src={igGreen.src} />
            </div>
        </a>
    </div>,
];

export default function PanelistCarousel() {
    return (
        <AliceCarousel mouseTracking items={panelists} responsive={numItems} />
    )
}
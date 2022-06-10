import { useState, useEffect } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const numItems = {
    0: {
        items: 1
    },
    512: {
        items: 3
    },
    1024: {
        items: 5
    }
}

const panelists = [
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src="" />
        </div>
        <h5 className="sub-header">PANELIST NAME</h5>
        <p className="body">Quick bio about panelist</p>
        <a href="twitter" className="social">
            {/* twitter icon */}
            Twitter
        </a>
        <a href="ig" className="social">
            {/* ig icon */}
            IG
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src="" />
        </div>
        <h5 className="sub-header">PANELIST NAME</h5>
        <p className="body">Quick bio about panelist</p>
        <a href="twitter" className="social">
            {/* twitter icon */}
            Twitter
        </a>
        <a href="ig" className="social">
            {/* ig icon */}
            IG
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src="" />
        </div>
        <h5 className="sub-header">PANELIST NAME</h5>
        <p className="body">Quick bio about panelist</p>
        <a href="twitter" className="social">
            {/* twitter icon */}
            Twitter
        </a>
        <a href="ig" className="social">
            {/* ig icon */}
            IG
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src="" />
        </div>
        <h5 className="sub-header">PANELIST NAME</h5>
        <p className="body">Quick bio about panelist</p>
        <a href="twitter" className="social">
            {/* twitter icon */}
            Twitter
        </a>
        <a href="ig" className="social">
            {/* ig icon */}
            IG
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src="" />
        </div>
        <h5 className="sub-header">PANELIST NAME</h5>
        <p className="body">Quick bio about panelist</p>
        <a href="twitter" className="social">
            {/* twitter icon */}
            Twitter
        </a>
        <a href="ig" className="social">
            {/* ig icon */}
            IG
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src="" />
        </div>
        <h5 className="sub-header">PANELIST NAME</h5>
        <p className="body">Quick bio about panelist</p>
        <a href="twitter" className="social">
            {/* twitter icon */}
            Twitter
        </a>
        <a href="ig" className="social">
            {/* ig icon */}
            IG
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src="" />
        </div>
        <h5 className="sub-header">PANELIST NAME</h5>
        <p className="body">Quick bio about panelist</p>
        <a href="twitter" className="social">
            {/* twitter icon */}
            Twitter
        </a>
        <a href="ig" className="social">
            {/* ig icon */}
            IG
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src="" />
        </div>
        <h5 className="sub-header">PANELIST NAME</h5>
        <p className="body">Quick bio about panelist</p>
        <a href="twitter" className="social">
            {/* twitter icon */}
            Twitter
        </a>
        <a href="ig" className="social">
            {/* ig icon */}
            IG
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src="" />
        </div>
        <h5 className="sub-header">PANELIST NAME</h5>
        <p className="body">Quick bio about panelist</p>
        <a href="twitter" className="social">
            {/* twitter icon */}
            Twitter
        </a>
        <a href="ig" className="social">
            {/* ig icon */}
            IG
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src="" />
        </div>
        <h5 className="sub-header">PANELIST NAME</h5>
        <p className="body">Quick bio about panelist</p>
        <a href="twitter" className="social">
            {/* twitter icon */}
            Twitter
        </a>
        <a href="ig" className="social">
            {/* ig icon */}
            IG
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src="" />
        </div>
        <h5 className="sub-header">PANELIST NAME</h5>
        <p className="body">Quick bio about panelist</p>
        <a href="twitter" className="social">
            {/* twitter icon */}
            Twitter
        </a>
        <a href="ig" className="social">
            {/* ig icon */}
            IG
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src="" />
        </div>
        <h5 className="sub-header">PANELIST NAME</h5>
        <p className="body">Quick bio about panelist</p>
        <a href="twitter" className="social">
            {/* twitter icon */}
            Twitter
        </a>
        <a href="ig" className="social">
            {/* ig icon */}
            IG
        </a>
    </div>,
];

export default function PanelistCarousel() {
    return (
        <AliceCarousel mouseTracking items={panelists} responsive={numItems} />
    )
}
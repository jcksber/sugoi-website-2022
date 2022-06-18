import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import twGreen from '../public/twitter_green-01.png';
import edBalloon from '../public/artists/EdBalloon.jpg';
import ekat from '../public/artists/Ekat.jpeg';
import stonieBlue from '../public/artists/StonieBlue.jpg';

const handleDragStart = (e) => e.preventDefault();

const numItems = {
    0: { items: 1 }, 512: { items: 2 }, 728: { items: 3 }, 
    928: { items: 4 }, 1224: { items: 5 }, 1500: {items: 7 }
}

const performers = [
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={edBalloon.src} />
        </div>
        <h5 className="sub-header">ED BALLOON</h5>
        <p className="body"></p>
        <a href="https://twitter.com/Ed_Balloon" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={ekat.src} />
        </div>
        <h5 className="sub-header">EKAT</h5>
        <p className="body"></p>
        <a href="https://twitter.com/EkatDance" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={stonieBlue.src} />
        </div>
        <h5 className="sub-header">STONIE BLUE</h5>
        <p className="body"></p>
        <a href="https://mobile.twitter.com/antbluejr" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src="" />
        </div>
        <h5 className="sub-header">A VERY SPECIAL<br/>GUEST</h5>
        <p className="body"></p>
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

export default function PerformersCarousel() {
    return (
        <AliceCarousel mouseTracking items={performers} responsive={numItems} />
    )
}
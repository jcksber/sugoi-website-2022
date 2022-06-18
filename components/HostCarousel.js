import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import twGreen from '../public/twitter_green-01.png';
import trish from '../public/speakers/Trish.JPG';
import victoriaLover from '../public/speakers/VictoriaLover.png';
import jordanMitchell from '../public/speakers/JORDANMITCHELL.JPG';
import kasVegas from '../public/speakers/KasVegas.jpg';
import logik from '../public/speakers/Logik.jpeg';
import israel from '../public/speakers/Israel.jpg';
import louKerner from '../public/speakers/lou_kerner.png';
import emilyLazar from '../public/speakers/EmilyLazar.jpg';
import mecyver from '../public/speakers/mecyver.png';
import motivate from '../public/speakers/motivate.png';

const handleDragStart = (e) => e.preventDefault();

const numItems = {
    0: { items: 1 }, 512: { items: 2 }, 728: { items: 3 }, 
    928: { items: 4 }, 1224: { items: 5 }, 1500: {items: 7 }
}

const hosts = [
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={logik.src} />
        </div>
        <h5 className="sub-header">LOGIK</h5>
        <p className="body">Founder of SUGOI</p>
        <a href="https://twitter.com/juliangilliam" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={trish.src} />
        </div>
        <h5 className="sub-header">TRISH</h5>
        <p className="body">Community builder</p>
        <a href="https://twitter.com/NFT_ish" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={israel.src} />
        </div>
        <h5 className="sub-header">ISRAEL</h5>
        <p className="body">Artist / Technologist</p>
        <a href="https://twitter.com/israelswilson" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={louKerner.src} />
        </div>
        <h5 className="sub-header">LOU KERNER</h5>
        <p className="body"></p>
        <a href="https://twitter.com/loukerner" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={kasVegas.src} />
        </div>
        <h5 className="sub-header">KAS VEGAS</h5>
        <p className="body">Community builder</p>
        <a href="https://twitter.com/kas__vegas" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={victoriaLover.src} />
        </div>
        <h5 className="sub-header">VICTORIA LOVER</h5>
        <p className="body">Artist</p>
        <a href="https://twitter.com/victoriaklover" className="social">
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
        <a href="https://twitter.com/J_MoneyMitch" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={mecyver.src} />
        </div>
        <h5 className="sub-header">MECYVER</h5>
        <p className="body"></p>
        <a href="https://twitter.com/mecdot" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={emilyLazar.src} />
        </div>
        <h5 className="sub-header">EMILY LAZAR</h5>
        <p className="body"></p>
        <a href="https://twitter.com/EmilyLazar_SM" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={motivate.src} />
        </div>
        <h5 className="sub-header">MOTIVATE</h5>
        <p className="body"></p>
        <a href="https://twitter.com/EricSpivak" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>
];

export default function HostCarousel() {
    return (
        <AliceCarousel mouseTracking items={hosts} responsive={numItems} />
    )
}
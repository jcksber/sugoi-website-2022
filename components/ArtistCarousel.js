
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import twGreen from '../public/twitter_green-01.png';
import sabet from '../public/artists/Sabet.jpeg';
import waheed from '../public/artists/Waheed.jpeg';
import gabe from '../public/artists/gabe.jpeg';
import foodmasku from '../public/artists/Foodmasku.png';
import gianniLee from '../public/artists/GianniLee.jpeg';
import swopes from '../public/artists/Swopes.JPG';
import brandonBreaux from '../public/artists/BrandonBreaux.jpg';

const handleDragStart = (e) => e.preventDefault();

const numItems = {
    0: { items: 1 }, 512: { items: 2 }, 728: { items: 3 }, 
    928: { items: 4 }, 1224: { items: 5 }, 1500: {items: 7 }
}

const artists = [
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={swopes.src} />
        </div>
        <h5 className="sub-header">SWOPES</h5>
        <p className="body">Visual Storyteller</p>
        <a href="https://twitter.com/Swopes" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={waheed.src} />
        </div>
        <h5 className="sub-header">WAHEED ZAI</h5>
        <p className="body">All Smilesss</p>
        <a href="https://twitter.com/all_smilesss" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={foodmasku.src} />
        </div>
        <h5 className="sub-header">FOODMASKU</h5>
        <p className="body">Realist</p>
        <a href="https://twitter.com/foodmasku" className="social">
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
            <img src={gabe.src} />
        </div>
        <h5 className="sub-header">GABE WEIS</h5>
        <p className="body">Resilient Cubist</p>
        <a href="https://twitter.com/GabrielJWeis" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={brandonBreaux.src} />
        </div>
        <h5 className="sub-header">BRANDON BREAUX</h5>
        <p className="body">Artist</p>
        <a href="https://twitter.com/theBreaux" className="social">
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
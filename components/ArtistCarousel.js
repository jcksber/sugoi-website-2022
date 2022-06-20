
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
import efdot from '../public/artists/EfDot.jpg';
import ericBookford from '../public/artists/ERICBOOCKFORD.jpg';
import kaleb from '../public/artists/Kaleb.jpg';
import quazr from '../public/artists/QUAZR.jpg';
import calid from '../public/artists/CalidB.jpg';
import june from '../public/artists/JuneKim.png';
import tayo from '../public/artists/TAYODAMNSHOES.jpg';
import blue from '../public/artists/BlueTheGreat.jpg';
import goldie from '../public/artists/Goldie.jpg';
import phen from '../public/artists/Phen.png';
import victoriaWest from '../public/artists/VictoriaWest.jpg';


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
            <img src={blue.src} />
        </div>
        <h5 className="sub-header">BLUE THE GREAT</h5>
        <p className="body">Artist</p>
        <a href="https://twitter.com/BlueTheGreat" className="social">
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
            <img src={phen.src} />
        </div>
        <h5 className="sub-header">PHEN</h5>
        <p className="body">Artist</p>
        <a href="https://twitter.com/phenmas" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={efdot.src} />
        </div>
        <h5 className="sub-header">EFDOT</h5>
        <p className="body">Artist</p>
        <a href="https://twitter.com/EfdotStudio" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card panelist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={goldie.src} />
        </div>
        <h5 className="sub-header">GOLDIE</h5>
        <p className="body">Artist & Founder @ ScaryGarys</p>
        <a href="https://twitter.com/GoldiesNFTart" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={ericBookford.src} />
        </div>
        <h5 className="sub-header">ERIC BOOCKFORD</h5>
        <p className="body">Artist</p>
        <a href="https://twitter.com/ericboocNFT" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={kaleb.src} />
        </div>
        <h5 className="sub-header">KALEB</h5>
        <p className="body">Artist</p>
        <a href="https://twitter.com/KalebsCode" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={quazr.src} />
        </div>
        <h5 className="sub-header">QUAZR</h5>
        <p className="body">Artist</p>
        <a href="https://twitter.com/quazrmusic" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={calid.src} />
        </div>
        <h5 className="sub-header">CALID B</h5>
        <p className="body">Artist</p>
        <a href="https://twitter.com/calidb" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={june.src} />
        </div>
        <h5 className="sub-header">JUNE KIM</h5>
        <p className="body">Sculptor</p>
        <a href="https://twitter.com/june_redthread" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={tayo.src} />
        </div>
        <h5 className="sub-header">TAYODAMNSHOES</h5>
        <p className="body">Artist</p>
        <a href="https://twitter.com/tayodamnshoes" className="social">
            <div className="img-container">
                <img src={twGreen.src} />
            </div>
        </a>
    </div>,
    <div className="caro-card artist" onDragStart={handleDragStart} role="presentation">
        <div className="img-container">
            <img src={victoriaWest.src} />
        </div>
        <h5 className="sub-header">VICTORIA WEST</h5>
        <p className="body">Photographer</p>
        <a href="https://twitter.com/tayodamnshoes" className="social">
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
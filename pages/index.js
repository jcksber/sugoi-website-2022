import Image from 'next/image';
import menuOpen from '../public/menu-open.svg';
import menuClose from '../public/img-assets.svg';
import sugoiBanner from '../public/sugoi_banner.jpg';
import takashiBg from '../public/placeholder2.jpg';
import dottedLine from '../public/dot_line.png';
import logikFlowers from '../public/placeholder1.png';

import { config } from "@fortawesome/fontawesome-svg-core";
import { useState, useEffect } from 'react'

config.autoAddCss = false;

export default function Home() {

    const [menuShown, setMenuShown] = useState(false);

    useEffect(() => {
        // on-render we want to trigger the "welcome animation"
    });

    const menuButtonClicked = async () => {
        if (menuShown) {
            setMenuShown(false);
        } else {
            setMenuShwon(true);
        }
    };

    return (
        <div id="sugoi" className="max-w-full">
            {/* nav bar / button */}
            <div id="nav-btn">
                {/* 
                    onClick this button needs to retract the landing
                    area and roll out the nav menu        
                */}
                {menuShown ?
                    (
                        <button className="close">
                            <div className="img-container">
                            {/* <Image src={menuClose} /> */}
                            </div>
                        </button>
                    ) : 
                    (
                        <button className="open">
                            <div className="img-container">
                            </div>
                        </button>
                    )
                } 
                {/* 
                    onClick this button needs to retract the nav menu 
                    and roll out the landing img        
                */}
            </div>

            {/* landing / hero section */}
            <div id="hero-menu">
                <div className="hero-banner img-container">
                    <img src={sugoiBanner.src} />
                </div>
                {/* this section right here is what will be animated on above button pushes */}
                {menuShown ?
                    (
                        <div className="open">
                            {/* in here we're going to display a block list of possible links for navigation */}
                        </div>
                    ) :
                    (
                        <div className="closed">
                            <img src={takashiBg.src} />
                        </div>
                    )
                }
                <div className="hero-banner img-container">
                    <img src={sugoiBanner.src} />
                </div>
            </div>

            {/* sugoi by logik section  */}
            <div id="bylogik" className="section text-olive-green">
                <h1 className="header">
                    SUGOI BY LOGIK<br/>
                    AT NFT NYC 2022,<br/>
                    JUNE 20-23
                </h1>

                <h5 id="location" className="sub-header text-olive-green">LOCATION</h5>
                <ul className="body text-olive-green">
                    <li>THE MODE, 65 Jay St</li>
                    <li>Brooklyn, NY 11201</li>
                </ul>

                <h5 id="details" className="sub-header text-olive-green">DETAILS</h5>
                <ul className="body text-olive-green">
                    <li>
                        3 days of events like Cocktail mixer,<br/>
                        live music, educational panels, food,<br/>
                        something games, continue
                    </li>
                </ul>

                <a href="https://getjuice.today/sugoi" id="mint" className="bg-yellow">NEED A KEY? MINT HERE</a>
                <a href="https://nftaccess.app/..." id="rsvp" className="bg-yellow">HAVE A KEY? RSVP HERE</a>
                <a href="https://sugoi.global/digital-swag-bag" id="digital-swag" className="bg-yellow">UNLOCK DIGITAL SWAG BAG</a>

                <div id="logik-flowers" className="img-container">
                    <img src={logikFlowers.src} />
                </div>
            </div>

            <div className="dotted-line img-container">
                <img src={dottedLine.src} />
            </div>
            {/* featured artists section (has gradient) */}
            <div id="artists" className="section">
                
            </div>

            <div className="dotted-line img-container">
                <img src={dottedLine.src} />
            </div>
            {/* event schedule */}
            <div id="events" className="section">
                
            </div>
            
            <div className="dotted-line img-container">
                <img src={dottedLine.src} />
            </div>
            {/* tickets and merch  */}
            <div id="tickets" className="section">
                
            </div>

            <div id="sponsors" className="section">
                
            </div>

            <div id="contact" className="section">
                
            </div>

            <div id="footer" className="section">

            </div>

        </div>
    )
}

















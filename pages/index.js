import ArtistCarousel from '../components/ArtistCarousel';
import PanelistCarousel from '../components/PanelistCarousel';

import Image from 'next/image';
import menuOpen from '../public/menu-open.svg';
import menuClose from '../public/img-assets.svg';
import sugoiBanner from '../public/sugoi_banner.jpg';
import takashiBg from '../public/placeholder2.jpg';
import dottedLine from '../public/dot_line.png';
import logikFlowers from '../public/placeholder1.png';
import frensKey from '../public/Sugo_zine_A4_green.png';
import plugKey from '../public/Sugo_zine_A4_orange.png';
import hustlerKey from '../public/Sugo_zine_A4_yellow.png';

import { config } from "@fortawesome/fontawesome-svg-core";
import { useState, useEffect } from 'react'

config.autoAddCss = false;

export default function Home() {

    const [menuShown, setMenuShown] = useState(false);
    const [viewArtists, setViewArtists] = useState(true);
    const [day1, setDay1] = useState(true);
    const [day2, setDay2] = useState(false);
    const [day3, setDay3] = useState(false);

    useEffect(() => {
        // on-render we want to trigger the "welcome animation"
    });

    const menuButtonClicked = async () => {
        if (menuShown) {
            setMenuShown(false);
            //need to add animations
        } else {
            setMenuShwon(true);
            //need to add animations
        }
    };

    const viewArtistsClicked = async () => {
        if (!viewArtists)
            setViewArtists(true);
    }
    const viewPanelistsClicked = async () => {
        if (viewArtists)
            setViewArtists(false);
    }

    const day1Clicked = async () => {
        if (!day1) {
            setDay1(true);
            setDay2(false);
            setDay3(false);
        }
    }
    const day2Clicked = async () => {
        if (!day2) {
            setDay2(true);
            setDay1(false);
            setDay3(false);
        }
    }
    const day3Clicked = async () => {
        if (!day3) {
            setDay3(true);
            setDay2(false);
            setDay1(false);
        }
    }

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
                        <button onClick={menuButtonClicked} className="close">
                            <div className="img-container">
                            {/* <Image src={menuClose} /> */}
                            </div>
                        </button>
                    ) : 
                    (
                        <button onClick={menuButtonClicked} className="open">
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
                <a href="https://getjuice.today/sugoi" id="mint" className="long-btn bg-yellow">NEED A KEY? MINT HERE</a>
                <a href="https://nftaccess.app/..." id="rsvp" className="long-btn bg-yellow">HAVE A KEY? RSVP HERE</a>
                <a href="https://sugoi.global/digital-swag-bag" id="digital-swag" className="long-btn bg-yellow">UNLOCK DIGITAL SWAG BAG</a>
                <div id="logik-flowers" className="img-container">
                    <img src={logikFlowers.src} />
                </div>
            </div>

            <div className="dotted-line img-container">
                <img src={dottedLine.src} />
            </div>
            {/* featured artists section */}
            <div id="artists" className="section text-olive-green">
                <h1 className="header">FEATURING</h1>
                <button id="view-artists" onClick={viewArtistsClicked} className={ viewArtists ? 'long-btn bg-yellow' : 'long-btn bg-peach'}>VIEW ARTISTS</button>
                <button id="view-panelists" onClick={viewPanelistsClicked} className={ viewArtists ? 'long-btn bg-peach' : 'long-btn bg-yellow'}>VIEW PANELISTS</button>
                { viewArtists ? (<ArtistCarousel />) : (<PanelistCarousel />) }
            </div>

            <div className="dotted-line img-container">
                <img src={dottedLine.src} />
            </div>
            {/* event schedule section */}
            <div id="events" className="section">
                <div className="vh">
                    <h1 className="header text-olive-green">
                        EVENT<br/>
                        SCHEDULE
                    </h1>
                    <button id="day1" onClick={day1Clicked} className={ day1 ? 'short-btn bg-yellow' : 'short-btn bg-peach'}>TUES, JUNE 21</button>
                    <button id="day2" onClick={day2Clicked} className={ day2 ? 'short-btn bg-yellow' : 'short-btn bg-peach'}>WED, JUNE 22</button>
                    <button id="day3" onClick={day3Clicked} className={ day3 ? 'short-btn bg-yellow' : 'short-btn bg-peach'}>THUR, JUNE 23</button>
                </div>
                <div className="vh">
                    {day1 && !day2 && !day3 &&
                        <div>
                            <h3 className="event-header">DOORS OPEN</h3>
                            <h5 className="sub-header">11AM</h5>
                            <p className="body">LOGIK intro to SUGOI</p>

                            <h3 className="event-header">PANELS</h3>
                            <h5 className="sub-header">11:30AM</h5>
                            <p className="body">The Importance of Onboarding</p>
                            <h5 className="sub-header">NOON</h5>
                            <p className="body">NFT Roadmaps: Then and Now</p>
                            <h5 className="sub-header">1PM</h5>
                            <p className="body">Artists Smart Contracts</p>
                            <h5 className="sub-header">1:30PM</h5>
                            <p className="body">The Keys to Tokengated Experiences</p>
                            <h5 className="sub-header">2:30PM</h5>
                            <p className="body">WTF is a DAO</p>
                            <h5 className="sub-header">3:00PM</h5>
                            <p className="body">Redefining the Music Industry</p>
                            <h5 className="sub-header">3:30PM</h5>
                            <p className="body">Ethics and Innovation</p>
                            <h5 className="sub-header">4:00PM</h5>
                            <p className="body">Owning Your Voice in Web3</p>

                            <h3 className="event-header">MIX & MINGLE</h3>
                            <h5 className="sub-header">5PM-7PM</h5>
                            <p className="body">Live music with DJs Blue and Gianni</p>
                        </div>
                    }
                    { !day1 && day2 && !day3 &&
                        <div>
                            <h3 className="event-header">PANELS</h3>
                            <h5 className="sub-header">10AM</h5>
                            <p className="body">The Art of Community</p>
                            <h5 className="sub-header">11AM</h5>
                            <p className="body">Into the Metaverse</p>
                            <h5 className="sub-header">11:30AM</h5>
                            <p className="body">Making an Impact in Web3 with Storytelling</p>
                            <h5 className="sub-header">NOON</h5>
                            <p className="body">Navigating Unprecedented Success in Web3</p>
                            <h5 className="sub-header">1PM</h5>
                            <p className="body">Diversity & Inclusivity in Web3</p>
                            <h5 className="sub-header">1:30PM</h5>
                            <p className="body">Corporate Agenda in Web3</p>
                            <h5 className="sub-header">2PM</h5>
                            <p className="body">The Convergence of Pop Culture and Web3</p>
                            <h5 className="sub-header">3PM</h5>
                            <p className="body">Swopes sunrise Panel</p>

                            <h3 className="event-header">TREETRUNK TAKEOVER</h3>
                            <h5 className="sub-header">4PM</h5>
                            <p className="body">Specialty Drinks + DJ</p>
                            <h5 className="sub-header">5PM</h5>
                            <p className="body">TreeTrunk Founders Panel</p>
                            <h5 className="sub-header">5:45PM</h5>
                            <p className="body">TreeTrunk Artists Panel</p>
                            <h5 className="sub-header">6:30PM</h5>
                            <p className="body">Closing DJ</p>
                        </div>
                    }
                    { !day1 && !day2 && day3 &&
                        <div>
                            <h3 className="event-header">PANELS</h3>
                            <h5 className="sub-header">10AM</h5>
                            <p className="body">Mindfulness in the Metaverse</p>
                            <h5 className="sub-header">11AM</h5>
                            <p className="body">Artists vs PFPs</p>
                            <h5 className="sub-header">NOON</h5>
                            <p className="body">Photography / Film / Fashion</p>
                            <h5 className="sub-header">12:30PM</h5>
                            <p className="body">Physical / Digital Items</p>
                            <h5 className="sub-header">1PM</h5>
                            <p className="body">World Building in Web3</p>
                            <h5 className="sub-header">1:30PM</h5>
                            <p className="body">Build It & They Will Come</p>
                            <h5 className="sub-header">2:30PM</h5>
                            <p className="body">Keepin' it G in Web3</p>
                            <h5 className="sub-header">3PM</h5>
                            <p className="body">The Power of Smart Contracts</p>
                            <h5 className="sub-header">3:30PM</h5>
                            <p className="body">NFTs for the Culture</p>

                            <h3 className="event-header">PERFORMANCES</h3>
                            <h5 className="sub-header">4PM</h5>
                            <p className="body">Specialty Drinks + DJ</p>
                            <h5 className="sub-header">8PM</h5>
                            <p className="body">Headline Act</p>
                        </div>
                    }
                </div>
            </div>
            
            <div className="dotted-line img-container">
                <img src={dottedLine.src} />
            </div>
            {/* tickets and merch  */}
            <div id="tickets" className="section">
                <div className="vh">
                    <h1 className="header text-olive-green">
                        TICKETS<br/>
                        AND<br/>
                        MERCH
                    </h1>
                    <a href="https://getjuice.today/sugoi" id="mint" className="long-btn bg-yellow">NEED A KEY? MINT HERE</a>
                    <a href="https://nftaccess.app/..." id="rsvp" className="long-btn bg-yellow">HAVE A KEY? RSVP HERE</a>
                    <a href="https://sugoi.global/digital-swag-bag" id="digital-swag" className="long-btn bg-yellow">UNLOCK DIGITAL SWAG BAG</a>
                </div>
                <div className="vh">
                    <div id="frens" className="ticket-container text-olive-green">
                        <div className="img-container">
                            <img src={frensKey.src}/>
                        </div>
                        <h5 className="sub-header">FRENS</h5>
                        <p className="body">
                            General Admission<br/>
                            Digital swag bag
                        </p>
                    </div>
                    <div id="plug" className="ticket-container text-olive-green">
                        <div className="img-container">
                            <img src={plugKey.src}/>
                        </div>
                        <h5 className="sub-header">PLUGS</h5>
                        <p className="body">
                            Plug NFT Holders Only<br/>
                            Exclusive key artwork<br/>
                            Champagne at Sugoi<br/>
                            Digital swag bag
                        </p>
                    </div>
                    <div id="hustler" className="ticket-container text-olive-green">
                        <div className="img-container">
                            <img src={hustlerKey.src}/>
                        </div>
                        <h5 className="sub-header">HUSTLERS</h5>
                        <p className="body">
                            Plug (Hustler) NFT Holders Only<br/>
                            Rarest key artwork<br/>
                            Champagne at Sugoi<br/>
                            Physical swag bag<br/>
                            Digital swag bag
                        </p>
                    </div>
                </div>
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

















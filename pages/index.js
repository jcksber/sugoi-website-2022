import ArtistCarousel from '../components/ArtistCarousel';
import PanelistCarousel from '../components/PanelistCarousel';

import menuOpen from '../public/menu-open-01.png';
import menuClose from '../public/img-assets-01.png';
import sugoiBanner from '../public/sugoi_banner.jpg';
import takashiBg from '../public/placeholder2.jpg';
import dottedLine from '../public/dot_line.png';
import logikFlowers from '../public/placeholder1.png';
import frensKey from '../public/Sugo_zine_A4_green.png';
import plugKey from '../public/Sugo_zine_A4_orange.png';
import hustlerKey from '../public/Sugo_zine_A4_yellow.png';
import footerSugoi from '../public/sugoi_footer-01.png';
import footerLogik from '../public/logik_peach-01.png';

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
            setMenuShown(true);
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
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            {/* nav bar / button */}
            <div id="nav-btn">
                {menuShown ?
                    (
                        <button onClick={menuButtonClicked} className="close">
                            <div className="img-container">
                                <img src={menuClose.src} />
                            </div>
                        </button>
                    ) : 
                    (
                        <button onClick={menuButtonClicked} className="open">
                            <div className="img-container">
                                <img src={menuOpen.src} />
                            </div>
                        </button>
                    )
                }
            </div>

            {/* landing / hero section */}
            <div id="hero-menu">
                <div className="hero-banner">
                    <div className="img-container">
                        <img src={sugoiBanner.src} />
                    </div>
                </div>
                {/* this section right here is what will be animated on above button pushes */}
                {menuShown ?
                    (
                        <div className="open">
                            <div id="nav-menu">
                                <ul>
                                    <li><a href="">HOME</a></li>
                                    <li><a href="">FEATURED GUESTS</a></li>
                                    <li><a href="">EVENT SCHEDULE</a></li>
                                    <li><a href="">MINT KEY & RSVP</a></li>
                                    <li><a href="">DIGITAL SWAG BAGS</a></li>
                                    <li><a href="">SPONSORS</a></li>
                                    <li><a href="">CONTACT</a></li>
                                </ul>
                            </div>
                        </div>
                    ) :
                    (
                        <div className="closed">
                            <img src={takashiBg.src} />
                        </div>
                    )
                }
                <div className="hero-banner">
                    <div className="img-container">
                        <img src={sugoiBanner.src} />
                    </div>
                </div>
            </div>

            {/* sugoi by logik section  */}
            <div id="bylogik" className="section text-olive-green">
                <h1 className="header">
                    SUGOI BY LOGIK<br/>
                    AT NFT NYC 2022,<br/>
                    JUNE 21-23
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
                            <p className="body">
                                The Importance of Onboarding<br/>
                                Host: Kas Vegas / Trish<br/>
                                Speakers: Emily Lazar, Natalie Crue
                            </p>
                            <h5 className="sub-header">NOON</h5>
                            <p className="body">
                                NFT Roadmaps: Then and Now<br/>
                                Host: Trish<br/>
                                Speakers: Phen, Gabe
                            </p>
                            <h5 className="sub-header">1PM</h5>
                            <p className="body">
                                Smart Contracts for Artists<br/>
                                Host: LOGIK<br/>
                                Speakers: VGF, satoshigoat, John Wolpert, Jiwa
                            </p>
                            <h5 className="sub-header">1:30PM</h5>
                            <p className="body">
                                The Keys to Tokengated Experiences<br/>
                                Speakers: darkblock.io
                            </p>
                            <h5 className="sub-header">2:30PM</h5>
                            <p className="body">
                                WTF is a DAO<br/>
                                Host: KrayTrain<br/>
                                Speakers: Snax, Natalie Crue, Jonah Blake
                            </p>
                            <h5 className="sub-header">3:00PM</h5>
                            <p className="body">
                                Redefining the Music Industry<br/>
                                Host: Black Dave<br/>
                                Speakers: Emily Lazar, Illa Da Producer, Spottie Wifi, Trish
                            </p>
                            <h5 className="sub-header">3:30PM</h5>
                            <p className="body">
                                Ethics and Innovation<br/>
                                Host: Israel Wilson<br/>
                                Speakers: Natalie Crue, Ruff Draft, Mecyver
                            </p>
                            <h5 className="sub-header">4:00PM</h5>
                            <p className="body">
                                Owning Your Voice in Web3<br/>
                                Speakers: Manouska, Ishita
                            </p>

                            <h3 className="event-header">MIX & MINGLE</h3>
                            <h5 className="sub-header">5PM-7PM</h5>
                            <p className="body">Live music with DJs Blue and Gianni</p>
                        </div>
                    }
                    { !day1 && day2 && !day3 &&
                        <div>
                            <h3 className="event-header">PANELS</h3>
                            <h5 className="sub-header">10AM</h5>
                            <p className="body">
                                The Art of Community<br/>
                                Speakers: Morgan, Natalie Crue, Trish
                            </p>
                            <h5 className="sub-header">11AM</h5>
                            <p className="body">
                                Into the Metaverse<br/>
                                Speakers: Sankofa, Mike B, VGF, Aneesh Sachdeva (ALT)
                            </p>
                            <h5 className="sub-header">11:30AM</h5>
                            <p className="body">
                                Making an Impact in Web3 via Storytelling<br/>
                                Speakers: Terrell Jones, Shavonne Wong
                            </p>
                            <h5 className="sub-header">NOON</h5>
                            <p className="body">
                                Navigating Unprecedented Success in Web3<br/>
                                Host: LOGIK<br/>
                                Speakers: All Smilesss, JR, Cory Van Lou, Sabet
                            </p>
                            <h5 className="sub-header">1PM</h5>
                            <p className="body">
                                Diversity & Inclusivity in Web3<br/>
                                Host: LOGIK<br/>
                                Speakers: Ruff Draft, Ishita, Ed Balloon
                            </p>
                            <h5 className="sub-header">1:30PM</h5>
                            <p className="body">
                                Corporate Agenda in Web3<br/>
                                Speakers: Faith Love, Alexander Bercow, VGF, Jonah Blake
                            </p>
                            <h5 className="sub-header">2PM</h5>
                            <p className="body">
                                The Convergence of Pop Culture and Web3<br/>
                                Speakers: Ed Balloon, Byan Calhoun, Efdot, Lizzy
                            </p>
                            <h5 className="sub-header">3PM</h5>
                            <p className="body">
                                Swopes sunrise Panel<br/>
                                Host: Swopes<br/>
                                Speakers: Sunrise Collective
                            </p>

                            <h3 className="event-header">TREETRUNK TAKEOVER</h3>
                            <h5 className="sub-header">4PM</h5>
                            <p className="body">Specialty Drinks + DJ</p>
                            <h5 className="sub-header">5PM</h5>
                            <p className="body">
                                TreeTrunk Founders Panel<br/>
                                Speakers: John Wolpert
                            </p>
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
                            <p className="body">
                                Mindfulness in the Metaverse
                            </p>
                            <h5 className="sub-header">11AM</h5>
                            <p className="body">
                                Artists vs PFPs<br/>
                                Speakers: JR, Eddie Ganglan, Waheed
                            </p>
                            <h5 className="sub-header">NOON</h5>
                            <p className="body">
                                Photography / Film / Fashion<br/>
                                Speakers: Zoe Stekkle, Anita Sadowska, Manouska
                            </p>
                            <h5 className="sub-header">12:30PM</h5>
                            <p className="body">
                                Physical / Digital Items<br/>
                                Host: LOGIK<br/>
                                Speakers: americana.io
                            </p>
                            <h5 className="sub-header">1PM</h5>
                            <p className="body">
                                World Building in Web3<br/>
                                Speakers: LOGIK, Phen, Justin Fredricks, Efdot
                            </p>
                            <h5 className="sub-header">1:30PM</h5>
                            <p className="body">
                                Build It & They Will Come<br/>
                                Speakers: Eddie Ganglan, Crypto Jeweler
                            </p>
                            <h5 className="sub-header">2:30PM</h5>
                            <p className="body">
                                Keepin' it G in Web3<br/>
                                Host: LOGIK<br/>
                                Speakers: Ruff Draft, Jonah Blake, Mr. Brian Design
                            </p>
                            <h5 className="sub-header">3PM</h5>
                            <p className="body">
                                The Power of Smart Contracts<br/>
                                Host: Trish<br/>
                                Speakers: Black Dave, Matt Monday
                            </p>
                            <h5 className="sub-header">3:30PM</h5>
                            <p className="body">
                                NFTs for the Culture<br/>
                                Host: Vic<br/>
                                Speakers: LOGIK, Eric, Trish
                            </p>

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
                    <a href="https://nftaccess.app/event/sugoi-nft-nyc-2022" id="rsvp" className="long-btn bg-yellow">HAVE A KEY? RSVP</a>
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

            <div id="sponsors" className="section text-dark-grey">
                <h1 className="header">
                    THANK YOU TO<br/>
                    OUR SPONSORS
                </h1>
                <div className="row">
                    <div className="col-33">
                        <div className="img-container">
                            <img src={plugKey.src} />
                        </div>
                        <p className="body">
                            Insert short sentence about sponsor here. Can be two sentences long or three wow!
                        </p>
                        <a href="twitter" className="social">
                            {/* twitter icon */}
                            Twitter
                        </a>
                        <a href="ig" className="social">
                            {/* ig icon */}
                            IG
                        </a>
                    </div>
                    <div className="col-33">
                        <div className="img-container">
                            <img src={plugKey.src} />
                        </div>
                        <p className="body">
                            Insert short sentence about sponsor here. Can be two sentences long or three wow!
                        </p>
                        <a href="twitter" className="social">
                            {/* twitter icon */}
                            Twitter
                        </a>
                        <a href="ig" className="social">
                            {/* ig icon */}
                            IG
                        </a>
                    </div>
                    <div className="col-33">
                        <div className="img-container">
                            <img src={plugKey.src} />
                        </div>
                        <p className="body">
                            Insert short sentence about sponsor here. Can be two sentences long or three wow!
                        </p>
                        <a href="twitter" className="social">
                            {/* twitter icon */}
                            Twitter
                        </a>
                        <a href="ig" className="social">
                            {/* ig icon */}
                            IG
                        </a>
                    </div>
                </div>
                <div id="second" className="row">
                    <div className="col-25">
                        <div className="img-container">
                            <img src={frensKey.src} />
                        </div>
                    </div>
                    <div className="col-25">
                        <div className="img-container">
                            <img src={frensKey.src} />
                        </div>
                    </div>
                    <div className="col-25">
                        <div className="img-container">
                            <img src={frensKey.src} />
                        </div>
                    </div>
                    <div className="col-25">
                        <div className="img-container">
                            <img src={frensKey.src} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <div className="img-container">
                            <img src={frensKey.src} />
                        </div>
                    </div>
                    <div className="col-25">
                        <div className="img-container">
                            <img src={frensKey.src} />
                        </div>
                    </div>
                    <div className="col-25">
                        <div className="img-container">
                            <img src={frensKey.src} />
                        </div>
                    </div>
                    <div className="col-25">
                        <div className="img-container">
                            <img src={frensKey.src} />
                        </div>
                    </div>
                </div>
            </div>

            <div id="contact" className="section text-olive-green">
                <h1 className="header">CONTACT US</h1>

                <h5 className="sub-header">GENERAL</h5>
                <p className="body">email@address.com</p>

                <h5 className="sub-header">SPONSORS/BRAND PARTNERS</h5>
                <p className="body">email@address.com</p>

                <h5 className="sub-header">NAME NAME</h5>
                <p className="body">email@address.com</p> 
            </div>

            <div id="footer" className="section bg-olive-green">
                <div className="hero-banner">
                    <div className="img-container">
                        <img src={sugoiBanner.src} />
                    </div>
                </div>
                <div id="sugoi-logo" className="img-container">
                    <img src={footerSugoi.src} />
                </div>
                <div id="logik-logo" className="img-container">
                    <img src={footerLogik.src} />
                </div>
                <p className="text-peach">
                    Sugoi connects Web3 and Big Tech to the Culture<br/>
                    (C) 2022 LOGIK Studios. All rights reserved.<br/>
                    Brand architecture by <a href="https://twitter.com/ennischung">@ennischung</a>
                </p>
            </div>

        </div>
    )
}

















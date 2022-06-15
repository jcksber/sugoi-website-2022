import { useState, useEffect } from 'react'
import menuOpen from '../public/menu-open-01.png';
import menuClose from '../public/img-assets-01.png';
import sugoiBanner from '../public/sugoi_banner.jpg';
import wow from '../public/wow-01.png';
import takashiBg from '../public/placeholder2.jpg';


function goToGuests(){
    document.querySelector('#artists').scrollIntoView({
        behavior: 'smooth'
    });
}
function goToEvents(){
    document.querySelector('#events').scrollIntoView({
        behavior: 'smooth'
    });
}
function goToMint(){
    document.querySelector('#tickets').scrollIntoView({
        behavior: 'smooth'
    });
}
function goToSwag(){
    document.querySelector('#tickets').scrollIntoView({
        behavior: 'smooth'
    });
}
function goToSponsors(){
    document.querySelector('#sponsors').scrollIntoView({
        behavior: 'smooth'
    });
}
function goToContact(){
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
}

export default function NavbarMenu() {
    
    const [menuShown, setMenuShown] = useState(false);

    const menuButtonClicked = async () => {
        const menuOpen = document.getElementById('menu-open');
        const menuClose = document.getElementById('menu-close');
        const hamburger = document.getElementById('hamburger');
        // const navList = document.getElementById('nav-menu');

        if (menuShown) {
            setMenuShown(false);
            //change the button displayed in nav
            menuClose.classList.remove('active');
            menuOpen.classList.add('active');
            //close menu animation
            hamburger.classList.remove('open');
        } else {
            setMenuShown(true);
            //change the button displayed in nav
            menuOpen.classList.remove('active');
            menuClose.classList.add('active');
            //open menu animation
            hamburger.classList.add('open');
        }
    };

    return (
        <div>
            <div id="nav-btn">
                <button id="menu-open" onClick={menuButtonClicked} className="menu-btn active">
                    <div className="img-container">
                        <img src={menuOpen.src} />
                    </div>
                </button>
                <button id="menu-close" onClick={menuButtonClicked} className="menu-btn">
                    <div className="img-container">
                        <img src={menuClose.src} />
                    </div>
                </button>
            </div>

            {/* landing / hero section */}
            <div id="hero-menu">
                <div className="hero-banner">
                    <div className="img-container">
                        <img src={sugoiBanner.src} />
                    </div>
                </div>
                {/* this section right here is what will be animated on above button pushes */}

                <div id="hamburger" className="hamburger">
                    <img id="hero-bg-img" src={takashiBg.src} />
                    <div id="nav-menu">
                        <ul>
                            {/* <li className="bg-peach"><a onClick={goHome}>HOME</a></li> */}
                            <li className="bg-peach"><a onClick={goToGuests}>FEATURED GUESTS</a></li>
                            <li className="bg-peach"><a onClick={goToEvents}>EVENT SCHEDULE</a></li>
                            <li className="bg-peach"><a onClick={goToMint}>MINT KEY & RSVP</a></li>
                            <li className="bg-peach"><a onClick={goToSwag}>DIGITAL SWAG BAGS</a></li>
                            <li className="bg-peach"><a onClick={goToSponsors}>SPONSORS</a></li>
                            <li className="bg-peach"><a onClick={goToContact}>CONTACT</a></li>
                        </ul>
                    </div>
                </div>

                <div className="hero-banner">
                    <div className="img-container">
                        <img src={sugoiBanner.src} />
                    </div>
                </div>
            </div>
        </div>
    )
}
    
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import sugoiKeyAbi from '../utils/sugoi_key_aboi.json';
import NavbarMenu from '../components/NavbarMenu';
import sugoiBanner from '../public/sugoi_banner.jpg';
import footerSugoi from '../public/sugoi_footer-01.png';
import footerLogik from '../public/logik_peach-01.png';
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export default function SecureTheBag() {

    return (
        <div id="sugoi" className="max-w-full">
            <NavbarMenu/>
            <h1 id="recap" className="header text-olive-green">
                SUGOI 2022 RECAP!
            </h1>
            <div id="media-landing" className="section">
                <div className="img-container">
                    <iframe src="https://www.youtube.com/embed/cUCk1NA8uY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div id="pics">
                <iframe src="https://logik.pixieset.com/sugoinftnyc2022/" title="SUGOI 2022 photo gallery"></iframe>
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
                    Brand architecture by <a href="https://twitter.com/ennischung" className="text-orange">@ennischung</a><br/>
                    Frontend & NFT by <a href="https://twitter.com/satoshigoat" className="text-orange">@satoshigoat</a>
                </p>
            </div>
        </div>
    );
}
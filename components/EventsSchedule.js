import { useState, useEffect } from 'react'

export default function NavbarMenu() {   
    
    const [day1, setDay1] = useState(true);
    const [day2, setDay2] = useState(false);
    const [day3, setDay3] = useState(false);

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
                {day1 &&
                    <div>
                        <h3 className="event-header">DOORS OPEN</h3>
                        <h5 className="sub-header">11AM</h5>
                        <p className="body">LOGIK intro to SUGOI</p>

                        <h3 className="event-header">PANELS</h3>
                        <h5 className="sub-header">11:30AM</h5>
                        <p className="body">
                            The Importance of Onboarding<br/>
                            Host: Trish<br/>
                            Speakers: Emily Lazar, Profits, Nkechi
                        </p>
                        <h5 className="sub-header">NOON</h5>
                        <p className="body">
                            Before We Ape In: Degens<br/>
                            Host: Trish<br/>
                            Speakers: JaketheDegen, Mike Mongo
                        </p>
                        <h5 className="sub-header">1PM</h5>
                        <p className="body">
                            <b>BREAKS - BIG Room Artist Take Over</b>
                        </p>
                        <h5 className="sub-header">1:30PM</h5>
                        <p className="body">
                            Smart Contracts for Artists<br/>
                            Host: LOGIK<br/>
                            Speakers: VGF, Satoshigoat, John Wolpert, Jiwa
                        </p>
                        <h5 className="sub-header">2:30PM</h5>
                        <p className="body">
                            The Keys to Tokengated Experiences<br/>
                            Host: LOGIK<br/>
                            Speakers: Darkblock.io Heremy Sahlman & Chris Seline
                        </p>
                        <h5 className="sub-header">3PM</h5>
                        <p className="body">
                            <b>BREAKS - BIG Room Artist Take Over</b>
                        </p>
                        <h5 className="sub-header">3:30PM</h5>
                        <p className="body">
                            Built It & They Will Come<br/>
                            Host: LOGIK<br/>
                            Speakers: Eddie Gangland, Crypto Jeweler, Gianni Lee & Foodmasku
                        </p>
                        <h5 className="sub-header">4PM</h5>
                        <p className="body">
                            Owning Your Voice in Web3<br/>
                            Host: Jordan<br/>
                            Speakers: Ishita, Jen Stein, Val, Nick Smoll
                        </p>
                        <h5 className="sub-header">4:30PM</h5>
                        <p className="body">
                            Web3 Research and Development<br/>
                            Host: Lou Kerner<br/>
                            Speakers: Ruff Draft, JP Cyber Alchemist, Chris Seline (Darkblock)
                        </p>
                        <h5 className="sub-header">5PM</h5>
                        <p className="body">
                            Redefining the future of the Music Industry<br/>
                            Host: Emily Lazar<br/>
                            Speakers: Illa Da Producer, Spottie Wifi, Alex Alpert
                        </p>
                    </div>
                }
                {day2 &&
                    <div>
                        <h3 className="event-header">PANELS</h3>
                        <h5 className="sub-header">11AM</h5>
                        <p className="body">
                            <b>BREAKS - BIG Room Artist Take Over</b>
                        </p>
                        <h5 className="sub-header">NOON</h5>
                        <p className="body">
                            NFTs for the Culture<br/>
                            Host: Vic<br/>
                            Speakers: Trish, Motivate, LOGIK, Faith Love
                        </p>
                        <h5 className="sub-header">12:30PM</h5>
                        <p className="body">
                            Making an Impact in Web3 with Storytelling<br/>
                            Host: MOTIVATE<br/>
                            Speakers: Terrell Jones, Andre O'shea Theo King (Customer Experience @ ALT), MoRuf
                        </p>
                        <h5 className="sub-header">1PM</h5>
                        <p className="body">
                            Navigating Unprecedented Success in Web3<br/>
                            Host: LOGIK<br/>
                            Speakers: Waheed, JR, Sabet, Gabe Weis
                        </p>
                        <h5 className="sub-header">1:30PM</h5>
                        <p className="body">
                            <b>BREAKS - BIG Room Artist Take Over</b><br/>
                        </p>
                        <h5 className="sub-header">2PM</h5>
                        <p className="body">
                            What Web3 Has Taught Me<br/>
                            Host: LOGIK<br/>
                            Speakers: VGF, MOTIVATE, Taylor, Jonah Blake
                        </p>
                        <h5 className="sub-header">2:30PM</h5>
                        <p className="body">
                            Where Do We Go From Here: sponsored WEB3 Pull Up<br/>
                            Host: Sankofa & Mike B<br/>
                            Speakers: Mike B, Rhyver White, Sankofa, Nessa Rutazamba
                        </p>
                        <h5 className="sub-header">3PM</h5>
                        <p className="body">
                            Swopes Sunrise Panel<br/>
                            Host: Swopes<br/>
                            Speakers: Sunrise Collective
                        </p>

                        <h3 className="event-header">TREETRUNK TAKEOVER</h3>
                        <h5 className="sub-header">4PM</h5>
                        <p className="body">Specialty Drinks + DJ</p>
                        <h5 className="sub-header">5PM</h5>
                        <p className="body">
                            TreeTrunk Founders Panel<br/>
                            Speakers: John Wolpert & team
                        </p>
                        <h5 className="sub-header">5:45PM</h5>
                        <p className="body">Treetrunk Artists Panel</p>
                        <h5 className="sub-header">6:30PM</h5>
                        <p className="body">DJ CLOSE</p>
                    </div>
                }
                {day3 &&
                    <div>
                        <h3 className="event-header">PANELS</h3>
                        <h5 className="sub-header">11AM</h5>
                        <p className="body">
                            WTF is a DAO sponsored<br/>
                            Host: Israel Wilson<br/>
                            Speakers: Snax, sh3k1n4h, KrayTrain
                        </p>
                        <h5 className="sub-header">11:30AM</h5>
                        <p className="body">
                            Artists vs PFPs<br/>
                            Host: Kas Vegas<br/>
                            Speakers: JR, Eddie Gangland, Waheed, Mr. Brian Design
                        </p>
                        <h5 className="sub-header">NOON</h5>
                        <p className="body">
                            Photography / Film / Fashion<br/>
                            Host: Vic<br/>
                            Speakers: Zoe Stekkle, Anita Sadowska, Manouska, Julie Pacino
                        </p>
                        <h5 className="sub-header">12:30PM</h5>
                        <p className="body">
                            <b>BREAK</b>
                        </p>
                        <h5 className="sub-header">1PM</h5>
                        <p className="body">
                            Physical / Digital Items<br/>
                            Host: MOTIVATE<br/>
                            Speakers: Americana.io
                        </p>
                        <h5 className="sub-header">1:30PM</h5>
                        <p className="body">
                            World Building in Web3<br/>
                            Host: LOGIK<br/>
                            Speakers: Poor Marty, Efdot, Ben Mayor White, StoneztheOrganic
                        </p>
                        <h5 className="sub-header">2PM</h5>
                        <p className="body">
                            The Convergence of Pop Culture and Web3<br/>
                            Host: Mecyver<br/>
                            Speakers: Ed Balloon, Bryan Calhoun, Allen Hena, LOGIK
                        </p>
                        <h5 className="sub-header">2:30PM</h5>
                        <p className="body">
                            <b>BREAK</b>
                        </p>
                        <h5 className="sub-header">3PM</h5>
                        <p className="body">
                            Keepin' it G in Web3<br/>
                            Host: Vic<br/>
                            Speakers: Ruff Draft, Jonah Blake, Israel, Trish
                        </p>
                        <h5 className="sub-header">3:30PM</h5>
                        <p className="body">
                            The Power of Smart Contracts<br/>
                            Host: LOGIK<br/>
                            Speakers: Ari, John Wolpert, Jack Kasbeer, Mecyver
                        </p>
                        <h5 className="sub-header">4PM</h5>
                        <p className="body">
                            Mindfulness in the Metaverse<br/>
                            Host: Lady Phe<br/>
                            Speakers: TBD
                        </p>

                        <h3 className="event-header">PERFORMANCES</h3>
                        <h5 className="sub-header">4:30PM DJs</h5>
                        <h5 className="sub-header">5PM Ekat</h5>
                        <h5 className="sub-header">6PM DJs</h5>
                        <h5 className="sub-header">6:30PM Ed Balloon</h5>
                    </div>
                }
            </div>
        </div>
    );
}
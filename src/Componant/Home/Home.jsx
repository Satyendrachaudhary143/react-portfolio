import React from 'react'
import "../Css/home.css"
import man from "../../assets/file/code.png";
import TypingEffect from "react-typing-effect";
import { MdOutlineWhatsapp } from 'react-icons/md';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
function Home() {

    useGSAP(() => {
        let t1 = gsap.timeline()
        t1.from(".line1", {
            y: 80,
            duration: 1,
            opacity: 0,
        })
        t1.from(".line2", {
            y: 180,
            duration: 1,
            opacity: 0,

        })
        t1.from(".line3", {
            y: 80,
            duration: 1,
            opacity: 0,

        })
        t1.from(".righthome img", {
            x: 700,
            duration: 1,


        })
    })

    return (
        <div id='home'>
            <div className="lefthome">
                <div className="details">
                    <div className="line1">I'M</div>
                    <div className="line2">SATYENDRA CHAUDHARY</div>
                    <div className="line3">
                        <TypingEffect text={["WEB DEVELOPER", "SOFTWARE DEVELOPER", "APP DEVELOPER"]}
                            speed={200}
                            eraseSpeed={50}
                            eraseDelay={200}
                            cursor={"_"}
                        />
                    </div>
                    <div className="social-links mt-3">
                        <div className={"icon hover:cursor-pointer"} >
                            <a href="https://wa.me/+918840859444" target='blank'> <MdOutlineWhatsapp /></a>
                        </div>
                        {/* <div className={"icon hover:cursor-pointer"} >
                            <a href="https://wa.me/8840859444"> <FaLinkedin /></a>
                        </div> */}
                        <div className={"icon hover:cursor-pointer"} >
                            <a href="https://www.instagram.com/satyendrachaudhary143?igsh=YzljYTk1ODg3Zg==" target='blank'> <FaInstagram /></a>
                        </div>
                        <div className={"icon hover:cursor-pointer"} >
                            <a href="https://github.com/Satyendrachaudhary143" target='blank'> <FaGithub /></a>
                        </div>




                    </div>
                </div>
            </div>
            <div className="righthome">
                <img src={man} alt="image" />
            </div>
        </div>
    )
}

export default Home

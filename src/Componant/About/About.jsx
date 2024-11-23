import React from 'react'
import "../Css/About.css";
import Cart from '../Cart/Cart'
import mern from "../../assets/file/mern.png";
import dsa from "../../assets/file/dsa.png";
import java from "../../assets/file/java.png";
import app from "../../assets/file/app.png"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';


function About() {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap.from(".circle", {
            x: -100,
            duration: 1,
            opacity: 0,

            scrollTrigger: {
                trigger: ".circle",
                scroll: "body",
                scrub: 2,

                start: "top 60%",
                end: "top 30%",
            }

        })
        gsap.from(".line", {
            x: -100,
            duration: 1,
            opacity: 0,

            scrollTrigger: {
                trigger: ".line",
                scroll: "body",
                scrub: 2,

                start: "top 60%",
                end: "top 30%",
            }

        })
        gsap.from(".personalefo ul", {
            y: 100,
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: ".personalefo ul",
                scroll: "body",
                scrub: 2,

                start: "top 60%",
                end: "top 30%",
            }

        })
        // gsap.from(".right", {
        //     x: 500,
        //     duration: 1,
        //     opacity: 0,

        //     scrollTrigger: {
        //         trigger: ".right Cart",
        //         scroll: "body",
        //         scrub: 2,
        //         markers: true,
        //         start: "top 100%",
        //         end: "top 20%",
        //     }

        // })

    })
    return (
        <div id='about'>
            <div className="left">
                <div className="circle-line">

                    <div className="circle"></div>
                    <div className="line"></div>

                    <div className="circle"></div>
                    <div className="line"></div>
                    <div className="circle"></div>

                </div>
                <div className="personal">
                    <div className="personalefo">
                        <h1>Personal Info</h1>
                        <ul >
                            <li><span>NAME</span> : SATYENDRA</li>
                            <li><span>AGE</span> : 19 YEARS</li>
                            <li><span>GANDER</span> : MALE</li>
                            <li><span>LANGUGE</span> : HINDI ENGLISH</li>
                        </ul>
                    </div>
                    <div className="personalefo">
                        <h1>Education</h1>
                        <ul>
                            <li><span>DEGREE</span> : ADCA , WEB & APP DEVELOPMENT</li>
                            <li><span>BRANCH</span> : ADVANCE DEPLOMA & SOFTWARE DEVELOPMENT</li>
                            <li><span>GRADE</span> : A+</li>

                        </ul>
                    </div>
                    <div className="personalefo">
                        <h1>Skill</h1>
                        <ul>
                            <li>MERN STACT WEB DEVELOPER</li>
                            <li>DSA</li>
                            <li>JAVA</li>
                            <li>APP DEVELOPER</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="right" >
                <Cart title={"MERN WEB DEVELOPMENT"} img={mern} className="ct" />
                <Cart title={"DSA"} img={dsa} className="ct" />

                <Cart title={"JAVA"} img={java} className="ct" />
                <Cart title={"APP DEVELOPER"} img={app} className="ct" />

            </div>
        </div>
    )
}

export default About

import React from 'react'
import "../Css/contact.css";
import ct from "../../assets/file/contact.png"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

function Contact() {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap.from(".leftcontact img", {
            x: -100,
            duration: 1,
            opacity: 0,

            scrollTrigger: {
                trigger: ".leftcontact img",
                scroll: "body",
                scrub: 2,

                start: "top 80%",
                end: "top 30%",
            }

        })
        gsap.from(".rightcontact form", {
            x: 100,
            duration: 1,
            opacity: 0,

            scrollTrigger: {
                trigger: ".rightcontact form",
                scroll: "body",
                scrub: 2,

                start: "top 80%",
                end: "top 30%",
            }

        })
    })
    return (
        <div id='contact'>
            <div className="leftcontact">
                <img src={ct} alt="" />
            </div>
            <div className="rightcontact">


                <form
                    action="https://formspree.io/f/xyzypvyb"
                    method="POST"
                >

                    <input type="text" name="name" placeholder='Name' required />
                    <input type="email" name="email" placeholder='Email' />
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder='Mobile No' required />



                    <textarea name="message" placeholder='Text Area' required></textarea>

                    {/* <!-- your other form fields go here --> */}
                    <button type="submit">Send</button>
                </form>

            </div>
        </div>
    )
}

export default Contact

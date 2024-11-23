import React, { useRef, useState } from 'react'
import "../Css/Nav.css";
import { Link } from 'react-scroll';
import { useGSAP } from '@gsap/react';
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import gsap from 'gsap';


function Nav() {

    const [menu, setMenu] = useState(true);
    const mobile = useRef();


    useGSAP(() => {
        let t1 = gsap.timeline()
        t1.from("nav h1", {
            y: -100,
            duration: 1,
            opacity: 0,
        })
        t1.from("nav ul li", {
            y: -100,
            duration: 1,
            opacity: 0,
            stagger: 1,
        })
    })
    return (
        <nav>
            <h1>SATYENDRA CHAUDHARY</h1>
            <ul className='destop'>
                <Link to='home' smooth={true} duration={500} activeClass='active' spy={true}><li>Home</li></Link>
                <Link to='about' smooth={true} duration={500} activeClass='active' spy={true}><li>About</li></Link>
                <Link to='project' smooth={true} duration={500} activeClass='active' spy={true}><li>Project</li></Link>
                <Link to='contact' smooth={true} duration={500} activeClass='active' spy={true}><li>Contact</li></Link>

            </ul>
            <div onClick={() => mobile.current.classList.toggle("activem")} className='menu'>
                {menu ? <GiHamburgerMenu onClick={() => { setMenu(false); }} className='menu' /> : <ImCross onClick={() => setMenu(true)} className='cross' />}

            </div>

            <ul className='mobile' ref={mobile}>
                <Link to='home' smooth={true} duration={500} activeClass='active' spy={true}><li>Home</li></Link>
                <Link to='about' smooth={true} duration={500} activeClass='active' spy={true}><li>About</li></Link>
                <Link to='project' smooth={true} duration={500} activeClass='active' spy={true}><li>Project</li></Link>
                <Link to='contact' smooth={true} duration={500} activeClass='active' spy={true}><li>Contact</li></Link>

            </ul>
        </nav>
    )
}

export default Nav

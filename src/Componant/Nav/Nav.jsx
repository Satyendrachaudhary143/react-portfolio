import React, { useRef, useState } from 'react'
import "./Nav.css";
import { Link } from 'react-scroll';

import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {
    const [menu, setMenu] = useState(true);
    const mobile = useRef();

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

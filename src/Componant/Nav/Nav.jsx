import { useState } from "react";
import "../../Css/style.css"


function Nav() {

 const [navbarOpen, setNavbarOpen] = useState(false);



    return (
        // <!-- Navbar -->
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
           <div className="container">
              {/* <!-- Logo --> */}
              <a className="navbar-brand" href="#">MyPortfolio</a>
             {/* <!-- Hamburger Menu --> */}
           
             
              
           
              {/* <!-- Navigation Links --> */}
              <div className="collapse navbar-collapse" id="navbarNav">
                 <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a className="nav-link active" href="#home">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
                    {/* <!-- <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
                    <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li> --> */}
                    <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                    <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                 </ul>
              </div>
           </div>
        </nav>
        // <!-- Hero Section -->
    )
}

export default Nav

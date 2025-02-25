import React from 'react'
import "../Css/About.css";
import { IoPerson } from "react-icons/io5";
import code from "../../assets/file/code.png"
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoBag } from "react-icons/io5";


function About() {


    return (
        <section className="about-section" id="about">
         <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
               {/* <!-- Profile Image --> */}
               <div className="profile-card">
                  <img src={code} alt="Profile Image" className="profile-image"/>
               </div>
               {/* <!-- About Me Text --> */}
               <div className="about-text">
                  <p>
                     Hi, I'm satyendra chaudhary, I am full stack web developer and specialize in complete web applications from start to finish. My expertise includes managing databases, developing APIs, ensuring security, and optimizing performance. I am proficient in HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and MySQL. I am passionate about creating modern, responsive, and user-friendly websites. I am available for freelance work and would love to hear about your project.
                  </p>
               </div>
               {/* <!-- Glassmorphic Info Cards --> */}
               <div className="info-cards">
                  <div className="info-card">
                     <IoPerson className='i'/>
                     <h3>Name</h3>
                     <p>Satyendra Chaudhary</p>
                  </div>
                  <div className="info-card ">
                     <MdOutlineEmail className='i'/>
                     <h3>Email</h3>
                            <p className="ct" style={{fontSize:"15px"}}>satyendrachaudhary38@gmail.com</p>
                  </div>
                  <div className="info-card">
                 <CiLocationOn className='i'/>
                     <h3>Location</h3>
                     <p>UP, Maharajganj, India</p>
                  </div>
                  <div className="info-card">
                  <IoBag className='i'/>
                     <h3>Freelance</h3>
                     <p>Available</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    )
}

export default About

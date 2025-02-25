import "../../Css/style.css"
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function Home() {



    return (
        // <!-- Hero Section -->
      <section className="hero-section" id="home">
         <div className="hero-content">
            {/* <!-- Name --> */}
            <h1 className="hero-title">Satyendra Chaudhary</h1>
            {/* <!-- Description --> */}
            <p className="hero-description">Creative Web Developer | Full Stack developer</p>
            {/* <!-- Call-to-Action Buttons --> */}
            <div className="hero-buttons">
               <a href="#contact" className="btn btn-primary">Hire Me</a>
               <a href="#portfolio" className="btn btn-secondary">View Portfolio</a>
            </div>
            {/* <!-- Social Media Icons --> */}
            <div className="social-icons">
               <a href="https://www.linkedin.com/in/satyendra-chaudhary-b958632b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="social-icon"><FaLinkedin/></a>
               <a href="https://github.com/satyendrachaudhary143" target="_blank" className="social-icon"><FaGithub/></a>
               <a href="https://x.com/ssboss183032734" target="_blank" className="social-icon"><FaTwitter/></a>
            </div>
         </div>
      </section>
    //   <!-- About Me Section -->
    )
}

export default Home

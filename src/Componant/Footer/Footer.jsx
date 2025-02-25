import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


function Footer() {
    
  return (
    <footer className="footer-section">
    <div className="container">
       <div className="footer-content">
          {/* <!-- Column 1: Logo & Short Bio --> */}
          <div className="footer-column">
             <a href="#" className="footer-logo">MyPortfolio</a>
             <p className="footer-bio" id="portfolio">
                I am full stack web developer and specialize in complete web applications from start to finish. My expertise includes managing databases, developing APIs, ensuring security, and optimizing performance.
             </p>
          </div>
          {/* <!-- Column 2: Quick Links --> */}
          <div className="footer-column">
             <h3 className="footer-heading">Quick Links</h3>
             <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
             </ul>
          </div>
          {/* <!-- Column 3: Contact Information --> */}
          <div className="footer-column">
             <h3 className="footer-heading">Contact Info</h3>
             <ul className="footer-contact">
                <li><MdEmail className="i"/> satyendrachaudhary38.com</li>
                <li> <FaPhoneAlt className="i"/> +91 8840859444</li>
                <li>
                   <div className="social-icons-footer">
                      <a href="https://www.linkedin.com/in/satyendra-chaudhary-b958632b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><FaLinkedin/></a>
                      <a href="https://github.com/satyendrachaudhary143" target="_blank"><FaGithub/></a>
                      <a href="https://x.com/ssboss183032734" target="_blank"><FaTwitter/></a>
                   </div>
                </li>
             </ul>
          </div>
       </div>
       {/* <!-- Copyright Notice --> */}
       <div className="footer-bottom">
          <p className="copyright">© 2025 satyendra chaudhary. All Rights Reserved.</p>
       </div>
    </div>
    {/* <!-- Scroll-to-Top Button --> */}
    <button id="scroll-to-top" className="scroll-to-top">
    <i className="fas fa-arrow-up"></i>
    </button>
 </footer>
  );
}
export default Footer;  
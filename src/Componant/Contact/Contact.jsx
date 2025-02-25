import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
function Contact() {


    return (
        <section className="contact-section" id="contact">
        <div className="container">
           <h2 className="section-title">Contact Me</h2>
           <div className="contact-content">
              {/* <!-- Contact Form --> */}
              <div className="contact-form">
                 <form  action="https://formspree.io/f/xyzypvyb"
                    method="POST">
                    <div className="form-group">
                       <input type="text" id="name" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                       <input type="email" id="email" name="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                       <textarea id="message" name="message" placeholder="Your Message" rows="5" required style={{resize:"none"}}></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                 </form>
              </div>
              {/* <!-- Contact Info Cards --> */}
              <div className="contact-info">
                 <div className="info-card">
                   <MdOutlineEmail className="i"/>
                    <h3>Email</h3>
                    <p>satyendrachaudhary38.com</p>
                 </div>
                 <div className="info-card">
                   <FaPhoneAlt className="i"/>
                    <h3>Phone</h3>
                    <p>+91 8840859444</p>
                 </div>
                 <div className="info-card">
                  <CiLocationOn className="i"/>
                    <h3>Location</h3>
                    <p>UP, Maharajganj, India</p>
                 </div>
              </div>
           </div>
        </div>
     </section>
    )
}

export default Contact

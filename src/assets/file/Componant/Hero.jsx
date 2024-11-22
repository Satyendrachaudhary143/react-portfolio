import { useState } from "react";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

function Hero() {
    const [hidden, setHidden] = useState("hidden");
    const [show, setShow] = useState("");
    const moresee = () => {
        setHidden("");
        setShow("hidden")
    }
    const lessee = () => {
        setHidden("hidden");
        setShow("")
    }

    return <section className="hero">
        <div className="hero-content">

            <h1>Hi, It's <span>Satyendra</span></h1>

            <h2>I'm A Web Developer</h2>

            <p className="m-0 p-0">As a dedicated web developer, I specialize in creating seamless, responsive websites and
                robust web applications. Proficient in HTML, CSS, JavaScript, and various frameworks,
                <span className={`text-xl font-bold cursor-pointer text-orange-600 ${show}`} onClick={() => moresee()}> see more</span></p>
            <p className={` more ${hidden}`} > I transform ideas into functional
                digital experiences. My commitment to clean code and innovative solutions ensures optimal performance and
                user engagement. Driven by a passion for technology and continuous learning, I strive to deliver high-quality,
                scalable solutions that exceed client expectations.
                <span className={`text-xl font-bold cursor-pointer text-orange-600 less ${hidden}`} onClick={() => lessee()}>see less</span>
            </p>


            <div className="social-links mt-3">
                <div className={"icon hover:cursor-pointer"} >
                    <MdOutlineWhatsapp />
                </div>
                <div className={"icon hover:cursor-pointer"} >
                    <FaLinkedin />
                </div>
                <div className={"icon hover:cursor-pointer"} >
                    <FaInstagram />
                </div>
                <div className={"icon hover:cursor-pointer"} >
                    <FaGithub />
                </div>




            </div>

            <div className="cta-buttons">
                {/* <button className="hire-btn hover:text-white hover:bg-orange-600">Download cv</button> */}
                < button className="contact-link hover:bg-orange-600 hover:text-white">contact</button>

            </div>
            <button className="hire-btn mx-auto">Project</button>
        </div >



    </section>
}
export default Hero;
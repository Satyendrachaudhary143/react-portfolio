import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaPhoneAlt, FaArrowUp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer style={{
            backgroundColor: '#1a1a2e', 
            color: 'white', 
            padding: '50px 0 20px 0',
            position: 'relative',
            zIndex: 1000
        }}>
            <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '40px'}}>
                    
                    {/* Column 1: Logo & Bio */}
                    <div>
                        <h2 style={{color: '#e94560', fontSize: '24px', marginBottom: '20px'}}>MyPortfolio</h2>
                        <p style={{color: '#ccc', lineHeight: '1.6'}}>
                            I am full stack web developer and specialize in complete web applications from start to finish. My expertise includes managing databases, developing APIs, ensuring security, and optimizing performance.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 style={{color: '#e94560', fontSize: '20px', marginBottom: '20px'}}>Quick Links</h3>
                        <ul style={{listStyle: 'none', padding: 0}}>
                            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                                <li key={link} style={{marginBottom: '10px'}}>
                                    <button 
                                        onClick={() => scrollToSection(link.toLowerCase())}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            color: '#ccc',
                                            cursor: 'pointer',
                                            fontSize: '16px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '5px 0'
                                        }}
                                        onMouseOver={(e) => e.target.style.color = '#e94560'}
                                        onMouseOut={(e) => e.target.style.color = '#ccc'}
                                    >
                                        <span style={{
                                            width: '8px',
                                            height: '8px',
                                            backgroundColor: '#e94560',
                                            borderRadius: '50%',
                                            marginRight: '10px'
                                        }}></span>
                                        {link}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h3 style={{color: '#e94560', fontSize: '20px', marginBottom: '20px'}}>Contact Info</h3>
                        <div style={{marginBottom: '15px'}}>
                            <a 
                                href="mailto:satyendrachaudhary38@gmail.com"
                                style={{color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center'}}
                                onMouseOver={(e) => e.target.style.color = '#e94560'}
                                onMouseOut={(e) => e.target.style.color = '#ccc'}
                            >
                                <MdEmail style={{marginRight: '10px', color: '#e94560'}} />
                                satyendrachaudhary38@gmail.com
                            </a>
                        </div>
                        <div style={{marginBottom: '15px'}}>
                            <a 
                                href="tel:+918840859444"
                                style={{color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center'}}
                                onMouseOver={(e) => e.target.style.color = '#e94560'}
                                onMouseOut={(e) => e.target.style.color = '#ccc'}
                            >
                                <FaPhoneAlt style={{marginRight: '10px', color: '#e94560'}} />
                                +91 8840859444
                            </a>
                        </div>
                        <div style={{marginTop: '20px'}}>
                            <div style={{display: 'flex', gap: '15px'}}>
                                <a
                                    href="https://www.linkedin.com/in/satyendra-chaudhary-b958632b9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: '#ccc', fontSize: '20px'}}
                                    onMouseOver={(e) => e.target.style.color = '#e94560'}
                                    onMouseOut={(e) => e.target.style.color = '#ccc'}
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    href="https://github.com/satyendrachaudhary143"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: '#ccc', fontSize: '20px'}}
                                    onMouseOver={(e) => e.target.style.color = '#e94560'}
                                    onMouseOut={(e) => e.target.style.color = '#ccc'}
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    href="https://x.com/ssboss183032734"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: '#ccc', fontSize: '20px'}}
                                    onMouseOver={(e) => e.target.style.color = '#e94560'}
                                    onMouseOut={(e) => e.target.style.color = '#ccc'}
                                >
                                    <FaTwitter />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div style={{borderTop: '1px solid #333', paddingTop: '20px', textAlign: 'center', color: '#ccc'}}>
                    <p>© 2025 satyendra chaudhary. All Rights Reserved.</p>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    backgroundColor: '#e94560',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    zIndex: 1001
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#d13d56'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#e94560'}
            >
                <FaArrowUp />
            </button>
        </footer>
    );
}

export default Footer;  
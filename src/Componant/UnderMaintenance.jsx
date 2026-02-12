import React from "react";
import "./UnderMaintenance.css";

export default function UnderMaintenance() {
    return (
        <div className="maintenance-wrapper">
            <div className="maintenance-card">
                <div className="status-badge">🚧 Currently Upgrading</div>

                <h1>We’re Rebuilding Something Better.</h1>

                <p className="description">
                    This portfolio is temporarily offline while a new and improved
                    version is being crafted. The next release will be faster, cleaner,
                    and more powerful.
                </p>

                <div className="contact-box">
                    <h3>Need immediate assistance?</h3>
                    <p>Reach out directly:</p>

                    <div className="contact-item">
                        📞 <a href="tel:8840859444">8840859444</a>
                    </div>

                    <div className="contact-item">
                        📧 <a href="mailto:satyendrachaudhary38@gmail.com">
                            satyendrachaudhary38@gmail.com
                        </a>
                    </div>
                </div>

                <div className="footer-note">
                    © {new Date().getFullYear()} Satyendra Chaudhary — All Rights Reserved
                </div>
            </div>
        </div>
    );
}
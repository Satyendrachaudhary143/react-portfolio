import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../Css/style.css"

function Nav() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Create refs for the mobile menu
    const mobileMenuRef = useRef(null);

    // --- Debugging Initial State ---
    // console.log('Nav component mounted. Initial navbarOpen state:', navbarOpen);
    // --------------------------------

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrolled]);

    // Close mobile menu when clicking outside with a delay
    useEffect(() => {
        if (!navbarOpen) {
            // When menu closes, remove listener immediately
            document.body.removeEventListener('click', handleClickOutsideWithDelay);
            return;
        }

        // Add a small delay before activating the click outside listener
        const timeoutId = setTimeout(() => {
            document.body.addEventListener('click', handleClickOutsideWithDelay);
        }, 100); // 100ms delay

        // Clean up the timeout and event listener when the component unmounts or navbarOpen changes
        return () => {
            clearTimeout(timeoutId);
            document.body.removeEventListener('click', handleClickOutsideWithDelay);
        };
    }, [navbarOpen]); // Re-run effect when navbarOpen changes

    // This handler will be added/removed with a delay
    const handleClickOutsideWithDelay = (event) => {
        // Check if the click target is the mobile menu or inside it
        const isMobileMenuClick = mobileMenuRef.current && mobileMenuRef.current.contains(event.target);

        // If the navbar is open and the click is not inside the mobile menu,
        // then close the navbar.
        if (!isMobileMenuClick) {
            setNavbarOpen(false);
        }
    };

    // Close mobile menu when clicking a link
    const handleLinkClick = (sectionId) => {
        setNavbarOpen(false);
        
        // Wait for menu to close before scrolling
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                // Try manual scrolling instead of scrollIntoView
                const offsetTop = element.offsetTop;
                window.scrollTo({
                    top: offsetTop - 80, // Account for fixed navbar
                    behavior: 'smooth'
                });
            }
        }, 300); // Wait 300ms for menu animation to complete
    };

    // Toggle handler
    const handleToggleClick = () => {
        setNavbarOpen(prevState => !prevState); // Ensure state is correctly toggled
    };

    const navLinks = [
        { href: "#home", text: "Home" },
        { href: "#about", text: "About" },
        { href: "#skills", text: "Skills" },
        { href: "#projects", text: "Projects" },
        { href: "#contact", text: "Contact" }
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full z-[1000] transition-all duration-300 ${
                scrolled ? "bg-[#1a1a2e]/95 backdrop-blur-sm shadow-lg" : "bg-[#1a1a2e]"
            }`}
        >
            <div className="container mx-auto">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        className="text-xl sm:text-2xl font-bold text-[#e94560] no-underline hover:no-underline"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        MyPortfolio
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-4 lg:space-x-8">
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    className="text-[#e94560] hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300 no-underline hover:no-underline"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {link.text}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden mobile-menu-button">
                        {/* Use motion.button again for animations if needed later */}
                        <motion.button
                             whileTap={{ scale: 0.95 }}
                            onClick={handleToggleClick}
                            className="text-[#e94560] hover:text-white focus:outline-none p-2"
                            aria-label="Toggle menu"
                        >
                            {navbarOpen ? (
                                <FaTimes className="h-6 w-6" />
                            ) : (
                                <FaBars className="h-6 w-6" />
                            )}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation with Animation */}
            <AnimatePresence>
                {navbarOpen && (
                    <motion.div
                        ref={mobileMenuRef} // Assign the ref here
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden mobile-menu bg-[#1a1a2e]/95 backdrop-blur-sm relative z-[1001]"
                        style={{zIndex: 9999}} // Very high z-index
                    >
                        <div className="container mx-auto px-4 py-2">
                            <div className="flex flex-col space-y-1">
                                {navLinks.map((link) => (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        className="text-[#e94560] hover:text-white block px-3 py-2 text-base font-medium no-underline hover:no-underline"
                                        whileHover={{ x: 10 }}
                                        onClick={() => handleLinkClick(link.href.substring(1))}
                                    >
                                        {link.text}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}

export default Nav;

import React, { useEffect } from 'react';
import '../Styles/Main.css';

// Import images directly
import heroBg from '../Assets/hero-bg.jpg';
import millet1 from '../Assets/Millet1.jpg';
import millet2 from '../Assets/Millet2.jpg';
import millet3 from '../Assets/Millet3.jpg';
import millet4 from '../Assets/Millet4.jpg';
import millet5 from '../Assets/Millet5.jpg';
import millet6 from '../Assets/Millet6.jpg';
import guar1 from '../Assets/Guar1.jpg';
import guar2 from '../Assets/Guar2.jpg';
import guar3 from '../Assets/Guar3.jpg';
import guar4 from '../Assets/Guar4.jpg';
import logo from '../Assets/Beacon.png'; // Import your logo image

const scrollToSection = (event, selector) => {
    event.preventDefault();
    const target = document.querySelector(selector);
    if (target) {
        window.scrollTo({
            top: target.offsetTop - 110, // Adjust this offset to fit your header height
            behavior: 'smooth',
        });
    }
};

const Main = () => {
    useEffect(() => {
        const links = document.querySelectorAll('.navbar-links a');
        links.forEach(link => {
            link.addEventListener('click', (event) => {
                scrollToSection(event, link.getAttribute('href'));
            });
        });

        return () => {
            links.forEach(link => {
                link.removeEventListener('click', (event) => {
                    scrollToSection(event, link.getAttribute('href'));
                });
            });
        };
    }, []);

    return (
        <main className="main">
            <header className="header">
                <div className="container">
                    <nav className="navbar">
                        <a href="#home" className="navbar-brand">
                            <img src={logo} alt="Beacon Export Logo" className="logo" />
                        </a>
                        <div className="navbar-links">
                            <a href="#about">About Us</a>
                            <a href="#products">Our Products</a>
                            <a href="#contact">Contact Us</a>
                        </div>
                    </nav>
                </div>
            </header>

            <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="hero-content">
                    <h2 className="hero-title">Welcome to Beacon Export</h2>
                    <p className="hero-subtitle">Your trusted partner in global trade</p>
                    <a href="#contact" className="hero-button">Get in Touch</a>
                </div>
            </section>
            
            <section className="products" id="products">
                <div className="container">
                    <h2 className="section-title">Our Products: Millets</h2>
                    <div className="carousel-container">
                        <div className="carousel">
                            {[millet1, millet2, millet3, millet4, millet5, millet6].map((src, index) => (
                                <div key={index} className="carousel-item">
                                    <img src={src} alt={`Millet ${index + 1}`} />
                                    <p></p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h2 className="section-title">Our Products: Guar Gum</h2>
                    <div className="carousel-container">
                        <div className="carousel">
                            {[guar1, guar2, guar3, guar4].map((src, index) => (
                                <div key={index} className="carousel-item">
                                    <img src={src} alt={`Guar Gum ${index + 1}`} />
                                    <p></p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="about" id="about">
                <div className="container">
                    <h2 className="section-title">About Us</h2>
                    <p className="section-text">
                        At Beacon Export, we specialize in high-quality agricultural exports from India. Our mission is to bridge the gap between India’s rich agricultural heritage and the global market by providing premium-quality millets and guar gum. With a commitment to sustainability, excellence, and ethical practices, we ensure that every product we export meets the highest standards of quality and freshness.
                    </p>
                    <p className="section-text">
                        We have a deep understanding of the agricultural landscape in India, leveraging local expertise and advanced technology to source the best products. Our team is dedicated to maintaining the integrity of our products from the field to your table, ensuring that they are processed, packaged, and delivered with the utmost care.
                    </p>
                    <h3 className="subsection-title">Partner with Beacon Export:</h3>
                    <p className="section-text">
                        Whether you are a retailer, distributor, or manufacturer, partnering with Beacon Export means gaining access to top-quality agricultural products and a reliable supply chain. Contact us today to learn more about our offerings and how we can help meet your needs.
                    </p>
                </div>
            </section>



            <section className="contact" id="contact">
                <div className="container">
                    <h2 className="section-title">Contact Us</h2>
                    <p className="section-text">
                        Ready to take the next step? Reach out to us today and let's start working together.
                    </p>
                    <a href="mailto:info@beaconexport.com" className="contact-button">Email Us</a>
                </div>
            </section>

            <section className="footer">
                <div className="container">
                    <div className="footer-info">
                        <div className="contact-info">
                            <h3>Varun Pratap Singh</h3>
                            <p><strong>Director</strong></p>
                            <p>Email: <a href="mailto:info@beaconexport.com">info@beaconexport.com</a></p>
                            <p>Phone: <a href="tel:+14033608483">+1 (403) 360-8483</a></p>
                        </div>
                        <div className="contact-info">
                            <h3>Madhav Tutlani</h3>
                            <p><strong>President</strong></p>
                            <p>Email: <a href="mailto:info@beaconexport.com">info@beaconexport.com</a></p>
                            <p>Phone: <a href="tel:+15144302864">+1 (514) 430-2864</a></p>
                        </div>
                    </div>
                    <p className="footer-note">© 2024 Beacon Export. All rights reserved.</p>
                </div>
            </section>
        </main>
    );
};

export default Main;

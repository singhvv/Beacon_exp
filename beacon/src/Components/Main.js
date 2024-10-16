import React, { useState, useEffect } from 'react';
import '../Styles/Main.css';

// Import images directly
import heroBg from '../Assets/hero-bg.jpg';
import millet1 from '../Assets/Millet1.jpg';
import millet2 from '../Assets/Millet2.jpg';
import millet3 from '../Assets/Millet3.jpg';
import millet4 from '../Assets/Millet4.jpg';
import guar1 from '../Assets/Guar1.jpg';
import guar2 from '../Assets/Guar2.jpg';
import guar3 from '../Assets/Guar3.jpg';
import guar4 from '../Assets/Guar4.jpg';
import logo from '../Assets/Beacon.png';
import linkedinIcon from '../Assets/linkedin.png';
import container from '../Assets/container.jpg';
import Aloe1 from '../Assets/Aloe1.jpg';
import Aloe2 from '../Assets/Aloe2.jpg';
import Aloe3 from '../Assets/Aloe3.jpg';
import Aloe4 from '../Assets/Aloe4.jpg';
import Saffron1 from '../Assets/Saffron1.jpg';
import Saffron2 from '../Assets/Saffron2.jpg';
import Saffron3 from '../Assets/Saffron3.jpg';
import Saffron4 from '../Assets/Saffron4.jpg';
import Coco1 from '../Assets/Coco1.jpg';
import Coco2 from '../Assets/Coco2.jpg';
import Coco3 from '../Assets/Coco3.jpg';
import Coco4 from '../Assets/Coco4.jpg';
import Jo1 from '../Assets/Jo1.jpg';
import Jo2 from '../Assets/Jo2.jpg';
import Jo3 from '../Assets/Jo3.jpg';
import Jo4 from '../Assets/Jo4.jpg';
import Cas1 from '../Assets/Cas1.jpg';
import Cas2 from '../Assets/Cas2.jpg';
import Cas3 from '../Assets/Cas3.jpg';
import Cas4 from '../Assets/Cas4.jpg';
import Tur1 from '../Assets/Tur1.jpg';
import Tur2 from '../Assets/Tur2.jpg';
import Tur3 from '../Assets/Tur3.jpg';
import Tur4 from '../Assets/Tur4.jpg';
import Rice1 from '../Assets/Rice1.jpg';
import Rice2 from '../Assets/Rice2.jpg';
import Rice3 from '../Assets/Rice3.jpg';
import Rice4 from '../Assets/Rice4.jpg';
import Mung1 from '../Assets/Mung1.jpg';
import Mung2 from '../Assets/Mung2.jpg';
import Mung3 from '../Assets/Mung3.jpg';
import Mung4 from '../Assets/Mung4.jpg';



const Slideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="product-slideshow">
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className={`slideshow-image ${index === currentIndex ? 'active' : ''}`}
                    style={{ opacity: index === currentIndex ? 1 : 0 }}
                />
            ))}
        </div>
    );
};



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
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        const links = document.querySelectorAll('.navbar-links a');
        links.forEach(link => {
            link.addEventListener('click', (event) => {
                scrollToSection(event, link.getAttribute('href'));
            });
        });
        
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            links.forEach(link => {
                link.removeEventListener('click', (event) => {
                    scrollToSection(event, link.getAttribute('href'));
                });
            });
        };
    }, []);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };
    
    return (
        <main className="main">
            <header className="header">
                <div className="container">
                    <nav className="navbar">
                        <div className="navbar-brand-container">
                            <a href="#home" className="navbar-brand">
                                <img src={logo} alt="Beacon Export Logo" className="logo" />
                            </a>
                                <a href="#home" className='logo-text'> Beacon Export </a>
                        </div>
                        <div className={`navbar-links ${menuActive ? 'active' : ''}`}>
                            <a href="#about">About Us</a>
                            <a href="#products">Our Products</a>
                            <a href="#contact">Contact Us</a>
                        </div>
                        <div className="hamburger" onClick={toggleMenu}>
                            <div></div>
                            <div></div>
                            <div></div>
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

            <section className="split-section">
                <div className="split-container">
                    {/* Left Half: Text Box */}
                    <div className="split-left">
                        <div className="text-box">
                            <h3 className="box-heading">Empowering Global Trade</h3>
                            <div className="divider"></div>
                            <p className="box-body">
                                At Beacon Export, we believe in bridging the gap between India's finest agriculture and the global market. Our commitment to quality, sustainability, and fair trade practices ensures that we deliver only the best products.
                            </p>
                        </div>
                    </div>
                    {/* Right Half: Image */}
                    <div className="split-right">
                        <img src={container} alt="Container Shipping" className="split-image" />
                    </div>
                </div>
            </section>




            <section className="products" id="products">
                <div className="container">
                    <h2 className="section-title">Our Products</h2>
                
                    {/* Millets Section */}
                    <div className="product-item">
                        <div className="product-text">
                            <h3>Millets</h3>
                            <p>
                            At Beacon Export, we take pride in offering a diverse range of high-quality millets, including Pearl Millet, Finger Millet, and Foxtail Millet. Our products include whole grains, nutritious flour, and premium seeds, catering to both culinary and agricultural needs. Sourced directly from sustainable farms in India, our millets are rich in essential nutrients, fiber, and antioxidants, making them an excellent choice for health-conscious consumers. Whether you’re a retailer looking to expand your product line or a food manufacturer seeking wholesome ingredients, our millets provide the versatility and quality needed to meet the demands of today’s market.
                            </p>
                        </div>
                        <Slideshow images={[millet1, millet2, millet3, millet4]} />
                    </div>
                
                    {/* Guar Gum Section */}
                    <div className="product-item product-reverse">
                        <Slideshow images={[guar1, guar2, guar3, guar4]} />
                        <div className="product-text">
                            <h3>Guar Gum</h3>
                            <p>
                                We offer top-quality Guar Gum, a natural thickening and stabilizing agent derived from the seeds of the guar plant. Our guar gum is sourced from trusted farms in India and is available in various grades, suitable for a wide range of applications, including food, pharmaceuticals, textiles, oil & gas, and cosmetics. Known for its exceptional viscosity and binding properties, our guar gum enhances the texture and shelf life of food products, making it an essential ingredient in sauces, dairy products, and baked goods. With our commitment to quality and sustainability, we ensure that our guar gum meets the highest standards for purity and performance.
                            </p>
                        </div>
                    </div>

                    {/* Aloe Vera Section */}
                    <div className="product-item">
                        <div className="product-text">
                            <h3>Aloe Vera</h3>
                            <p>
                                We provide premium Aloe Vera products, renowned for their numerous health benefits. Sourced from the best farms in India, our Aloe Vera is available in various forms, including pure gel, powder, and juice. Known for its soothing and moisturizing properties, Aloe Vera is widely used in the beauty, health, and wellness industries. Our products are rich in vitamins, minerals, and antioxidants, making them ideal for skincare, haircare, and dietary supplements. Committed to sustainability and quality, we ensure our Aloe Vera products are processed with care to retain their natural properties and efficacy, meeting the highest industry standards.
                            </p>
                        </div>
                        <Slideshow images={[Aloe1, Aloe2, Aloe3, Aloe4]} />
                    </div>
                
                    {/* Saffron Section */}
                    <div className="product-item product-reverse">
                        <Slideshow images={[Saffron1, Saffron2, Saffron3, Saffron4]} />
                        <div className="product-text">
                            <h3>Saffron</h3>
                            <p>
                                We take great pride in offering one of India's most exotic products, Saffron, renowned for its exquisite flavor and vibrant hue. Sourced from the lush fields of Kashmir, our Saffron is meticulously hand-harvested, capturing the essence of this luxurious spice. With its rich aroma, Saffron elevates everything from traditional dishes to modern culinary creations. Beyond its culinary appeal, this golden treasure is celebrated for its potential health benefits, making it a favorite in the wellness community. Our commitment to quality and sustainability ensures that each strand reflects the dedication of our farmers, providing you with the finest Saffron straight from the heart of India.
                            </p>
                        </div>
                    </div>

                    {/* Coconut Oil Section */}
                    <div className="product-item">
                        <div className="product-text">
                            <h3>Coconut Oil</h3>
                            <p>
                                Our Coconut Oil is a staple in every kitchen, known for its versatility and health benefits. Sourced from the sun-kissed coasts of India, our organic coconut oil is cold-pressed to retain its rich flavor and nutrients. Whether you're cooking, baking, or using it as a natural beauty remedy, this oil adds a touch of tropical goodness to your daily routine. It’s perfect for sautéing vegetables, adding moisture to skin and hair, or even as an ingredient in your favorite DIY treatments. At Beacon Export, we are committed to quality and sustainability, ensuring that every jar reflects our dedication to nature and wellness.
                            </p>
                        </div>
                        <Slideshow images={[Coco1, Coco2, Coco3, Coco4]} />
                    </div>
                
                    {/* Jojoba Oil Section */}
                    <div className="product-item product-reverse">
                        <Slideshow images={[Jo1, Jo2, Jo3, Jo4]} />
                        <div className="product-text">
                            <h3>Jojoba Oil</h3>
                            <p>
                                Our Jojoba Oil is a natural treasure, meticulously extracted from the seeds of the jojoba plant, which thrives in the arid landscapes of India. Renowned for its moisturizing properties, this oil closely resembles the natural oils produced by our skin, making it an ideal choice for skincare and haircare. It absorbs easily without clogging pores, providing hydration while promoting a healthy glow. Whether used as a nourishing facial oil, a soothing massage oil, or a conditioner for your hair, our high-quality jojoba oil is versatile and effective. At Beacon Export, we prioritize purity and sustainability, ensuring you receive the best nature has to offer.
                            </p>
                        </div>
                    </div>

                    {/* Castor Oil Section */}
                    <div className="product-item">
                        <div className="product-text">
                            <h3>Castor Oil</h3>
                            <p>
                                Our Castor Oil is a natural powerhouse derived from the seeds of the castor bean plant, sustainably sourced from the rich landscapes of India. Known for its numerous health and beauty benefits, this oil is rich in ricinoleic acid, which has anti-inflammatory and moisturizing properties. It's an excellent choice for promoting healthy hair growth, soothing dry skin, and supporting overall wellness. Whether used in DIY beauty treatments, as a natural laxative, or for its therapeutic qualities, our high-quality castor oil is a must-have addition to your natural health routine. At Beacon Export, we ensure every drop is pure and responsibly sourced for your peace of mind.
                            </p>
                        </div>
                        <Slideshow images={[Cas1, Cas2, Cas3, Cas4]} />
                    </div>
                
                    {/* Turmeric Section */}
                    <div className="product-item product-reverse">
                        <Slideshow images={[Tur1, Tur2, Tur3, Tur4]} />
                        <div className="product-text">
                            <h3>Turmeric</h3>
                            <p>
                                Our Turmeric is sourced from the vibrant fields of India, where the golden spice is cultivated with care. Known for its potent anti-inflammatory and antioxidant properties, this versatile spice is a staple in both culinary and wellness traditions. Whether you’re adding it to your dishes for flavor and color or using it in natural remedies for its health benefits, our turmeric is of the highest quality. With its rich, earthy aroma and vibrant hue, it enhances not only the taste of your meals but also promotes overall well-being. Experience the power of this ancient superfood with Beacon Export's premium turmeric.
                            </p>
                        </div>
                    </div>

                    {/* Rice Section */}
                    <div className="product-item">
                        <div className="product-text">
                            <h3>Rice</h3>
                            <p>
                            At Beacon Export, we specialize in delivering premium quality rice varieties sourced directly from India’s fertile fields. Our selection includes Basmati, non-Basmati, and organic rice options, perfect for diverse culinary applications. We focus on ensuring that each grain is carefully processed, retaining its natural aroma and flavor. Whether you are seeking bulk quantities for wholesale or specific grades for unique needs, our rice meets rigorous quality standards. Our commitment to sustainability and fair trade ensures that the rice we supply supports both the farmers and the environment.
                            </p>
                        </div>
                        <Slideshow images={[Rice1, Rice2, Rice3, Rice4]} />
                    </div>
                
                    {/* Mung Beans Section */}
                    <div className="product-item product-reverse">
                        <Slideshow images={[Mung1, Mung2, Mung3, Mung4]} />
                        <div className="product-text">
                            <h3>Mung Beans</h3>
                            <p>
                            Beacon Export offers high-quality mung beans, known for their rich nutritional profile and versatility. Our mung beans are sourced from trusted farmers in India, ensuring they are packed with natural goodness. Whether you need whole beans, split mung (moong dal), or sprouted varieties, we provide products that meet strict quality standards. Ideal for a range of culinary applications, from soups to salads, our mung beans are processed and packed to retain their freshness. We prioritize sustainable farming practices, ensuring that our offerings are both environmentally responsible and supportive of local agricultural communities.
                            </p>
                        </div>
                    </div>
                


                    
                </div>
            </section>









            <section className="about-us" id="about-us">
    <div className="about-background">
        <div className="container">
            <h2 className="section-title">About Us</h2>
            <p className="section-description">
                At Beacon Export, we are dedicated to bringing the finest agricultural products from India to the global market. With years of experience in the industry, we have established strong relationships with local farmers, ensuring that our products meet the highest standards of quality and sustainability. 
            </p>
            <h3 className="subsection-title">Our Values</h3>
            <p className="section-description">
                We believe in integrity, transparency, and sustainability. Our commitment to ethical sourcing and fair trade practices not only supports local farmers but also guarantees that our customers receive premium products that are grown with care.
            </p>
            <h3 className="subsection-title">Our Vision</h3>
            <p className="section-description">
                Our vision is to empower communities by providing them with access to international markets. We strive to be a leader in agricultural exports while making a positive impact on the lives of farmers and consumers alike.
            </p>
            <h3 className="subsection-title">Join Us</h3>
            <p className="section-description">
                Whether you are a retailer, distributor, or consumer, we invite you to join us in our mission to support sustainable agriculture and promote high-quality products. Contact us today to learn more about our offerings!
            </p>
        </div>
    </div>
</section>



            <section className="contact" id="contact">
                <div className="container">
                    <h2 className="section-title">Contact Us</h2>
                    <p className="section-text">
                        Ready to take the next step? Reach out to us today and let's start working together.
                    </p>
                    <a href="mailto:info@beaconexport.com" className="contact-button">Email Us</a>
                    <a href="https://www.linkedin.com/company/beacon-export" target="_blank" rel="noopener noreferrer" className="linkedin-button">
                        <img src={linkedinIcon} alt="LinkedIn" />
                    </a>

                    {/* Calendly inline widget */}
                    <div className="calendly-inline-widget" data-url="https://calendly.com/vp-182k/consultation" style={{ minWidth: "320px", height: "700px" }}></div>

                </div>
            </section>


            <section className="footer">
                <div className="container">
                    <div className="footer-info">
                        <div className="contact-info">
                            {/* <h3>Varun Pratap Singh</h3> */}
                            <p><a href="mailto:info@beaconexport.com">info@beaconexport.com</a></p>
                            <p><a href="tel:+14033608483">+1 (403) 360-8483</a></p>
                            <p><a href="tel:+14033608483">+1 (514) 430-2864</a></p>
                        </div>
                        {/* <div className="contact-info"> */}
                            {/* <h3>Madhav Tutlani</h3> */}
                            {/* <p>Email: <a href="mailto:info@beaconexport.com">info@beaconexport.com</a></p> */}
                            {/* <p>Phone: <a href="tel:+15144302864">+1 (514) 430-2864</a></p> */}
                        {/* </div> */}
                    </div>
                    <p className="footer-note">© 2024 Beacon Export. All rights reserved.</p>
                </div>
            </section>
        </main>
    );
};

export default Main;

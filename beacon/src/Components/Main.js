import React, { useEffect } from 'react';
import '../Styles/Main.css';

// Assets (adjust filenames if your actual assets differ)
import heroVid from '../Assets/herovid.mp4';
import millet1 from '../Assets/milletvid.mp4';
import guar1 from '../Assets/guarvid.mp4';
import Rice1 from '../Assets/ricevid.mp4';
import Psyllium1 from '../Assets/psyvid.mp4';
import logo from '../Assets/Beacon.png';
import linkedinIcon from '../Assets/linkedin.png';

const scrollToSection = (event, selector) => {
event.preventDefault();
const target = document.querySelector(selector);
if (target) {
window.scrollTo({
top: target.offsetTop - 110,
behavior: 'smooth',
});
}
};

const Main = () => {
useEffect(() => {
  let lastScroll = 0;
  const header = document.querySelector('.header');

  // Scroll hide/show navbar
  const handleScroll = () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      header.style.top = '0px'; // top of page
      return;
    }

    if (currentScroll > lastScroll) {
      // scrolling down → hide navbar
      header.style.top = '-100px';
    } else {
      // scrolling up → show navbar
      header.style.top = '0';
    }

    lastScroll = currentScroll;
  };

  window.addEventListener('scroll', handleScroll);

  // Smooth scroll for navbar links
  const links = document.querySelectorAll('.navbar-links a');
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      scrollToSection(event, link.getAttribute('href'));
    });
  });

  // IntersectionObserver for product sections
  const sections = document.querySelectorAll('.product-section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, { threshold: 0.2 });
  sections.forEach(section => observer.observe(section));

  // Cleanup
  return () => {
    window.removeEventListener('scroll', handleScroll);

    links.forEach(link => {
      link.removeEventListener('click', (event) => {
        scrollToSection(event, link.getAttribute('href'));
      });
    });

    observer.disconnect();
  };

}, []);


return ( <main className="main">
{/* Header / Navbar */} <header className="header"> <div className="container"> <nav className="navbar"> <div className="navbar-brand-container"> <a href="#home" className="navbar-brand"> <img src={logo} alt="Beacon Export Logo" className="logo" /> </a></div> <div className="navbar-links"> <a href="#about">About Us</a> <a href="#products">Our Products</a> <a href="#contact">Contact Us</a> </div>
<div className="hamburger" onClick={() => {
document.querySelector('.navbar-links').classList.toggle('active');
}}> <div></div> <div></div> <div></div> </div> </nav> </div> </header>

```
  {/* Hero Section (now a video) */}
  <section className="hero" id="home">
    <video
      src={heroVid}
      autoPlay
      muted
      loop
      playsInline
      className="hero-video"
    />
    <div className="hero-content">
      <h2 className="hero-title">Beacon Export</h2>
      <p className="hero-subtitle">Trade Built on Trust</p>
      <a href="#contact" className="hero-button">Get in Touch</a>
    </div>
  </section>

  {/* Middle Main Section (Products) */}
  <section className="main-products" id="products">
    <div className="container">

      {/* Millets */}
      <section className="product-section">
        <div className="product-text">
          <h2>Millets</h2>
          <p>
            High-quality millets sourced from sustainable farms in India. Nutritious, versatile, and perfect for health-conscious consumers and food manufacturers.
          </p>
        </div>
        <div className="product-media">
          <video
            src={millet1}
            autoPlay
            muted
            loop
            playsInline
            className="product-media-video"
          />
        </div>
      </section>

      {/* Guar Gum */}
      <section className="product-section product-reverse">
        <div className="product-text">
          <h2>Guar Gum</h2>
          <p>
            Natural thickening and stabilizing agent. Available in multiple grades for food, pharma, textile, oil & gas, and cosmetic industries.
          </p>
        </div>
        <div className="product-media">
          <video
            src={guar1}
            autoPlay
            muted
            loop
            playsInline
            className="product-media-video"
          />
        </div>
      </section>

      {/* Rice */}
      <section className="product-section">
        <div className="product-text">
          <h2>Rice</h2>
          <p>
            Premium rice sourced directly from India’s fertile fields. Aromatic, flavorful, and perfect for culinary and wholesale applications.
          </p>
        </div>
        <div className="product-media">
          <video
            src={Rice1}
            autoPlay
            muted
            loop
            playsInline
            className="product-media-video"
          />
        </div>
      </section>

      {/* Psyllium Husk */}
      <section className="product-section product-reverse">
        <div className="product-text">
          <h2>Psyllium Husk</h2>
          <p>
            Rich source of soluble fiber. Enhances texture and fiber content in baked goods, breakfast cereals, and gluten-free formulations.
          </p>
        </div>
        <div className="product-media">
          <video
            src={Psyllium1}
            autoPlay
            muted
            loop
            playsInline
            className="product-media-video"
          />
        </div>
      </section>

    </div>
  </section>

  {/* About Us Section */}
  <section className="about-us" id="about">
    <div className="about-background">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p className="section-description">
          At Beacon Export, we specialize in supplying high-quality products. With strong roots in India’s farming sector, we ensure consistent supply, reliable quality, and competitive pricing for our partners.
        </p>
        <p className="section-description">
          We believe in reliability, transparency, and sustainability. We maintain strict quality standards while promoting fair trade practices. Our goal is to deliver products that meet the demanding requirements of your industry while supporting long-term, ethical supply chains.
        </p>
        <p className="section-description">
          Our vision is to be a leading supplier for the world. We strive to bridge the gap between global production and demand, empowering businesses with the resources they need while creating growth opportunities for farmers.
        </p>
        <p className="section-description">
          Whether you are an oilfield service provider, chemical distributor, or food and beverage manufacturer, we invite you to partner with us. Together, we can strengthen your supply chain with dependable solutions. Contact us today to learn more about how Beacon Export can support you on your way to success!
        </p>
      </div>
    </div>
  </section>

  {/* Contact Section */}
  <section className="contact" id="contact">
    <div className="container">
      <h2 className="section-title">Contact Us</h2>
      <p className="section-text">
        Ready to take the next step? Reach out to us today and let's start working together.
      </p>
      <div className="button-group">
        <a href="mailto:info@beaconexport.com" className="contact-button">Email Us</a>
        <a href="https://www.linkedin.com/company/beacon-export" target="_blank" rel="noopener noreferrer" className="linkedin-button">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
      </div>
    </div>
  </section>

  <footer className="footer">
  <div className="footer-content">
    <div className="footer-contact">
      <p><strong>Montreal, Canada</strong></p>
      <p>+1 (514) 430-2864</p>
      {/* <p><strong>Email:</strong> info@beaconexport.com</p> */}
    </div>
    
    <div className="footer-contact">
      <p><strong>Punjab, India</strong></p>
      <p>+91 79730 27308</p>
      {/* <p><strong>Email:</strong> info@beaconexport.com</p> */}
    </div>
    
    <div className="footer-contact">
      <p><strong>Calgary, Canada</strong></p>
      <p>+1 (403) 360-8483</p>
      {/* <p><strong>Email:</strong> info@beaconexport.com</p> */}
    </div>
  </div>

  <div className="footer-bottom">
    <p>© {new Date().getFullYear()} Beacon Export. All rights reserved.</p>
  </div>
</footer>

</main>


);
};

export default Main;


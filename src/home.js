import React, { useRef, useEffect } from 'react';
import Card from './card';
import image1 from "./img/sample.jpg";
import image2 from "./img/sample2.jpg";
import image3 from "./img/sample3.jpg";
import image4 from "./img/sample4.jpg";
import logo from "./img/logo.svg";
import menu from "./img/menu.svg";
import Resume from "./Resume.pdf"
  const Home = () =>  {
	const fadeInRefs = useRef([]); // Ref array to store all fade-in elements

  const cardsData = [
    { title: "Ricoz", type: "Branding", image: image1, link: "/ricoz" },
    { title: "Petzy", type: "CaseStudy", image: image2, link: "/ricoz" },
    { title: "MyDeziner", type: "DesignTOOL", image: image3, link: "/ricoz" },
    { title: "HomeGymr", type: "Checkout", image: image4, link: "/ricoz" }
  ];

  useEffect(() => {
    // Handle scroll event for navbar
    const handleScroll = () => {
      const navBar = document.querySelector('.nav-bar');
      if (window.scrollY > 0) {
        navBar.classList.add('scrolled'); // Add class when scrolling
      } else {
        navBar.classList.remove('scrolled'); // Remove class when at the top
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Smooth scroll functionality
    const buttons = document.querySelectorAll(".scroll-button");
    buttons.forEach(button => {
      button.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor link behavior
        document.getElementById("works-section").scrollIntoView({ behavior: "smooth" });
      });
    });
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('fade-in'); // Replace 'old-class' with the class you want to remove
          entry.target.classList.add('fade-in-visible');          
          observer.unobserve(entry.target);
        }
      });
    }, options);

    // Observe each fade-in element
    fadeInRefs.current.forEach(fadeIn => observer.observe(fadeIn));

    // Clean up observer on component unmount
    return () => {
      fadeInRefs.current.forEach(fadeIn => observer.unobserve(fadeIn));
    };
  }, []);

  return (
    <div className="content" id="content">
      <nav className="nav-bar">
        <div className="nav-main">
          <a href="/"><img src={logo} alt="logo" /></a>
          <img className="menu-icon" src={menu} alt="menu-icon" id="menu-icon" />
          <div className="menu-container" id="menu-container">
            <div className="mob-nav-btns">
              <a href="/about-section" className="about-button btn-1 mob-btn-1">About</a>
              <a href={Resume} target="_blank" rel="noopener noreferrer" className="btn-1 mob-btn-1">Resume</a>
            </div>
          </div>
          <div className="nav-btns">
            <a href="/" className="about-button header-text">About</a>
            <a href={Resume} target="_blank" rel="noopener noreferrer" className="header-text">Resume</a>
          </div>
        </div>
      </nav>

      <main>
        <section className="fade-in" ref={(el) => { if (el) fadeInRefs.current.push(el); }}>
          <div className="full-bg">
            <div className="bg-main">
              <div className="intro-section-main">
                <div className="intro-section">
                  <div className="intro-content">
                    <div>
                      <p className="intro-white-text fade-in translate-text-down" ref={(el) => { if (el) fadeInRefs.current.push(el); }}>
                        Sai Chittala <br />
                        <span className="intro-white-text">Product Designer at </span>
                        <a href="https://www.customfurnish.com/home" target="_blank">CustomFurnish</a> <br />
                        <span className="intro-grey-text intro-link">Email</span>
                        <span className="intro-grey-text intro-link">LinkedIn</span>
                        <span className="intro-grey-text intro-link">Upwork</span>
                      </p>
                    </div>
                  </div>
                  <div className="bg-works" id="works-section">
                    <div className="cards-container" id="cards-container">
                      {cardsData.map((card, index) => (
                        <Card
                        key={index}
                        title={card.title}
                        type={card.type}
                        image={card.image}
                        link={card.link} fadeInRefs={fadeInRefs}/>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <section class="fade-in" ref={(el) => { if (el) fadeInRefs.current.push(el); }}>
          <div class="full-bg">
            <div class="bg-footer">
              <div class="footer-main">
                <div class="footer-content">
                  <a class="footer-white">Sai Chittala</a>
                  <a class="footer-grey">Product Designer</a>
                </div>
                <div class="footer-content">
                  <a href="https://www.linkedin.com/in/saichittala/" class="footer-white" target="_blank" >Linkedin</a>
                  <a href="https://www.upwork.com/freelancers/~01762e36a0d1eb9abf/" class="footer-white" target="_blank" >Upwork</a>
                </div>
                <div class="footer-content">
                  <a class="footer-white">About</a>
                  <a href="Resume.pdf" class="footer-white">Resume</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
  }
  
  export default Home;
  
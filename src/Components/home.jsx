import { useState, useContext, useRef, useEffect } from "react";
import Background_image from "../assets/landing.jpeg";
import Background_image1 from "../assets/Porschelanding.jpeg";
import Background_image2 from "../assets/temp4.jpg";
import "./home.css";

import Navbar from "./Navbar/Navbar.jsx";
import PorscheCards from "./Porsche-cards/PorscheCards.jsx";
import Footer from "./Footer/Footer.jsx";
import Leftslide from "./Drop/Leftslide.jsx";

import porsche718 from "../assets/718.jpg";
import porschemacan from "../assets/macan.jpg";
import porschepanamera from "../assets/panamera.jpg";
import porschegt3 from "../assets/gt3.jpg";

import video1 from "../../src/assets/porschevideo1.mp4";
import video from "../../src/assets/porschevideo.mp4";

import { MenuContext } from "./MenuContext.jsx";

const Home = () => {
  const { isShowMenu } = useContext(MenuContext);

  // Refs
  const sectionRef = useRef(null);
  const discoverRef = useRef(null);
  const newRef = useRef(null);

  // States
  const [bgColor, setBgColor] = useState("white"); // Navbar color


  const [color, setColor] = useState("white"); // Section bg
  const [fontColor, setFontColor] = useState("black"); // 
  

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === discoverRef.current) {
            setColor("black");
            console.log("ooookx");
          } else if (entry.target === newRef.current) {
            setColor("black");
          }
        }     
      });
    },
    { threshold:0.5 }
  );

  if (discoverRef.current) observer.observe(discoverRef.current);
  if (newRef.current) observer.observe(newRef.current);

  return () => {
    if (discoverRef.current) observer.unobserve(discoverRef.current);
    if (newRef.current) observer.unobserve(newRef.current);
  };
}, []);


// For sectionRef only
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setBgColor("black");
          setFontColor("white");
        } else {
          setBgColor("white");
          setFontColor("black");
        }
      });
    },
    { threshold: 0.3 }
  );

  if (sectionRef.current) observer.observe(sectionRef.current);

  return () => {
    if (sectionRef.current) observer.unobserve(sectionRef.current);
  };
}, []);


  // Hero cars rotation
  const heroCars = [
    {
      model: "911 GT3 RS",
      tagline: "Track-Bred. Road-Ready.",
      description: "Raw power. Race precision.",
      image: Background_image,
      cta: "Explore GT3 RS",
    },
    {
      model: "Macan",
      tagline: "Performance Meets Practicality.",
      description: "Sporty. Versatile. Porsche.",
      image: Background_image1,
      cta: "Discover the Macan",
    },
    {
      model: "Taycan",
      tagline: "Electric Thrills. Zero Compromise.",
      description: "Fast. Futuristic. Electric.",
      image: Background_image2,
      cta: "Shop Taycan",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const changeBackground = setInterval(() => {
      setCurrentIndex((c) => (c + 1) % heroCars.length);
    }, 3000);

    return () => clearInterval(changeBackground);
  }, []);

  const displayCar = heroCars[currentIndex];

  return (
    <div>
      <div className="home-container">
        {isShowMenu && (
          <div className="pos">
            <Leftslide />
          </div>
        )}

        {/* Hero Section */}
        <img src={displayCar.image} alt="" className="banner-img" />

        {!isShowMenu ? (
          <div className="nav">
           <Navbar fontColor={color} />

          </div>
        ) : (
          ""
        )}

        <div className="landing-head">
          <h1>{displayCar.description}</h1>
          <button>{displayCar.cta}</button>
        </div>
      </div>

      {/* Porsche Journey Section */}
      <section className="porsche journey" ref={newRef}>
        <div className="d-padding container">
          <div className="porsche-cards">
            <PorscheCards car1={"hashim"} />
            <div className="ara">
              <p>
                Taycan 4S Black Edition: Electric energy consumption combined
                (model range): 20.3 – 18.0 kWh/100 km, CO₂-emissions combined
                (model range): 0 g/km | 911 Carrera S: Fuel consumption combined
                (model range): 10.7 – 10.2 l/100 km, CO₂-emissions combined
                (model range): 244 – 232 g/km | Panamera 4S E-Hybrid: Fuel
                consumption (weighted) combined (model range): 4.0 – 3.2 l/100
                km, Electric energy consumption (weighted) combined (model
                range): 29.1 – 17.6 kWh/100 km, CO₂-emissions (weighted) combined
                (model range): 91 – 74 g/km, Fuel consumption (sustaining)
                combined (model range): 9.8 – 8.8 l/100 km
              </p>
            </div>
          </div>
        </div>

        <div
          className="porsche-journey"
          ref={sectionRef}
          style={{
            backgroundColor: bgColor,
            transition: "background-color 1.1s ease",
          }}
        >
          <h1 style={{ color: fontColor }}>
            Your Porsche journey starts now.
          </h1>

          <div className="porsche-cars">
            <div className="row">
              <div className="porsche-car">
                <img src={porschegt3} alt="" />
                <video src={video} autoPlay muted className="video" />
                <div className="content">
                  <p>new car</p>
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>

              <div className="porsche-car">
                <img src={Background_image1} alt="" />
                <video src={video} autoPlay muted className="video" />
              </div>
            </div>

            <div className="row">
              <div className="porsche-car">
                <img src={Background_image} alt="" />
                <video src={video1} autoPlay muted />
              </div>
              <div className="porsche-car">
                <img src={porschemacan} alt="" />
                <video src={video1} autoPlay muted className="video" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section className="discover" ref={discoverRef}>
        <div className="d-padding container">
          <div className="discover-head">
            <h2>Discover</h2>
            <PorscheCards
              text1={"Porsche Experience"}
              text2={"E-performance-Sustainable Mobility"}
              text3={"Porsche Finder"}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;

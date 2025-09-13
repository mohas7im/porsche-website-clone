import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import { carData } from "../carData.js";
import caymangt4rs718 from "../../assets/subcars/718caymangt4rs.avif";
import "./CarMain.css";
import caymanfront from "../../assets/caymanfront.avif";
import { useSelector } from "react-redux";
import Leftslide from "../Drop/Leftslide.jsx";
import { MenuContext } from "../MenuContext";
import { useContext } from "react";
import mainImage from "../../assets/temp3.jpg";
import mobileImg from "../../assets/mobileimg.jpeg";
import CountUp from "react-countup";
import Cookies from "universal-cookie";
import Footer from "../Footer/Footer.jsx";

const Carmain = () => {
  const displayCar = useSelector((state) => state.car.selectedCar);
  const cookies = new Cookies();
  const { isShowMenu } = useContext(MenuContext);

  const userSelectedCar = cookies.get("selectedCar");

  const [imageMove, setimageMove] = useState();
  const [changeValue, setchangeValue] = useState(114);


  const moveUp = useRef(null);

  useEffect(() => {
    const scrollChange = () => {
      const rect = moveUp.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (!moveUp.current) return;
      if (rect.top < windowHeight && rect.bottom > 50) {
        const value = windowHeight - rect.top * 0.2;

        console.log("me ku ku");
        if (value >= 120 && value <= 1000) {
          console.log("andi andi");
          const newChange = value - 600;
          setchangeValue(newChange);
        }
      }
    };
    window.addEventListener("scroll", scrollChange);

    return () => {
      window.removeEventListener("scroll", scrollChange);
    };
  }, []);

  useEffect(() => {
    console.log(changeValue);
  }, [changeValue]);

  return (
    <>
      {!isShowMenu ? (
        <Navbar color="black"  />
      ) : (
        ""
      )}

      {isShowMenu && (
        <div className="pos">
          <Leftslide />
        </div>
      )}

      {carData.map((car, i) =>
        car.submodels
          .filter((subItem) => subItem.name === userSelectedCar)
          .map((subCar, j) => (
            <div key={j}>
              <section className="Car-main-content">
                <div className="container d-padding car-main-image">
                  <img src={subCar.img} alt="" />
                  <h1>{subCar.name}</h1>
                  <p className="fuel">{car.fuel}</p>

                  <div className="car-main-buttons">
                    <button>Change Model</button>
                    <button>Configure</button>
                    <p>
                      Fuel consumption combined: 9.7 – 8.9 l/100 km (preliminary
                      value), CO2-emissions combined (WLTP)*: 220 – 201 g/km
                      (preliminary value), CO2 Class: G (preliminary value)
                    </p>
                  </div>
                </div>
              </section>
              <section className="d-padding container car-details">
                <div className="car-details-left">
                  <div className="acceleration">
                    <h1>
                      5.1 <span className="accel-small">s</span>
                    </h1>
                    <p>Acceleration 0-100 km/h</p>
                  </div>
                  <div className="acceleration">
                    <h1>
                      220 <span className="accel-small">kW</span> / 300{" "}
                      <span className="accel-small">ps</span>
                    </h1>
                    <p>Power(kw)/300ps</p>
                  </div>
                  <div className="acceleration">
                    <h1>
                      275 <span className="accel-small">km/h</span>
                    </h1>
                  </div>
                  <button>View all technical details</button>
                </div>
                <div className="car-details-right">
                  <img src={caymanfront} alt="" />
                </div>
              </section>

              <section>
                <div className="container d-padding curur target " ref={moveUp}>
                  <div className="car-main-detail">
                    <h1>{subCar.name}</h1>
                    <img src={mainImage} alt="" />
                  </div>
                  <div className="under-content">
                    <div className="under-content-left">
                      <div className="under-content-left-details">
                        <h4>Further Together</h4>
                        <p>
                          Experiencing moments together opens your eyes to what
                          is special. The perfect starting point for this: the
                          Porsche Cayenne Coupé. The design takes up the iconic
                          silhouette of the 911, thereby impressively
                          emphasising the sportiness of the coupé models.
                        </p>
                        <a href="">Legal Notice</a>
                      </div>
                    </div>
                    <div
                      className="under-content-right"
                      style={{ bottom: `${changeValue}px` }}
                    >
                      <img src={mobileImg} alt="" />
                    </div>
                  </div>
                </div>
              </section>
              <Footer />
            </div>
          ))
      )}
    </>
  );
};

export default Carmain;

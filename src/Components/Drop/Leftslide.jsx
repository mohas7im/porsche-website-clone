import React, { useState } from "react";
import "./leftslide.css";
import { carData } from "../carData.js";
import { useDispatch } from "react-redux";
import { selectCar } from "../Redux/slice.js";
import { Navigate, useNavigate } from "react-router-dom";
import { MenuContext } from "../MenuContext";
import { useContext } from "react";
import Cookies from "universal-cookie";

const menuItem = [
  "Models",
  "Vehicles",
  "Services",
  "Experience",
  "Find a Dealer",
];

const Leftslide = () => {
  const [selectmenu, setselectmenu] = useState("Models");
  const [selectCars, setSelectCars] = useState(null);
  const [subModel, setsubModel] = useState(null);
  const cookies = new Cookies();
  const { openLeftSlide, closeLeftSlide, setisShowMenu,  navColor,
        setnavColor  } =
    useContext(MenuContext);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const subModels = () => {
    return (
      <>
        {carData
          .filter((car) => car.name === selectCars)
          .map((car, i) => (
            <div key={i}>
              {car.submodels.map((subItem, index) => (
                <div
                  className="car-item"
                  key={index}
                  onClick={() => {
                    dispatch(selectCar(subItem.name));
                    cookies.set("selectedCar", subItem.name);
                    console.log(subItem.name);
                    navigate("/carmain");
                    closeLeftSlide();
                    
                  }}
                >
                  <h3>{subItem.name}</h3>
                  <img src={subItem.img} alt="" />
                  <button>{car.fuel}</button>
                </div>
              ))}
            </div>
          ))}
      </>
    );
  };
  return (
    <section className="">
      <div className="dropmenu-section">
        <div className=" d-padding  drop-menu">
          {!selectCars &&
            menuItem.map((item, i) => (
              <div key={i} className="dropok">
                <button
                  onClick={() => {
                    setselectmenu(item);
                  }}
                >
                  {item}
                  <i className="bi bi-arrow-right "></i>
                </button>
              </div>
            ))}

          {selectCars && (
            <div>
              <h3 className="headmodel">
                <span onClick={() => setSelectCars(null)}>
                  <i className="bi bi-arrow-left arrleft"></i>
                </span>
                Models
              </h3>
              {carData.map((item, i) => (
                <div className="modeltype">
                  <div
                    className="models"
                    key={i}
                    onClick={() => setSelectCars(item.name)}
                  >
                    <h2>{item.name}</h2>
                    <p>{item.fuel}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* menu*/}
          {/* {!selectCars ? (
            menuItem.map((item, i) => (
              <div href="" key={i} className="dropok">8
                <button
                  onClick={() => {
                    setselectmenu(item);
                  }}
                >
                  {item}
                </button>
                <i className="bi bi-arrow-right"></i>
              </div>
            ))
          ) : (
            <div>
              <h3>Models</h3>
              {carData.map((item, i) => (
                <div key={i}>
                  <h2>{item.name}</h2>
                  <p>{item.fuel}</p>
                </div>
              ))}
            </div>
          )} */}
        </div>

        <div className="dropmenu-middle-section">
          {!selectCars ? (
            <>
              {selectmenu === "Models" &&
                carData.map((car, index) => (
                  <div
                    className="car-item"
                    onClick={() => setSelectCars(car.name)}
                    key={index}
                  >
                    <h3>{car.name}</h3>
                    <img src={car.img} alt={car.name} />
                    <button>{car.fuel}</button>
                  </div>
                ))}
              {selectmenu === "Vehicles" && (
                <div className="vehicleitem">
                  <h3>Configure</h3>
                  <h3>Compare Models</h3>
                  <h3>Find New and PreOwned Vehicles</h3>
                  <h3>E-Mobility & E-performance</h3>
                </div>
              )}
              {selectmenu === "Experience" && (
                <div className="vehicleitem">
                  <h3>Motorsport</h3>
                  <h3>Porsche Experience-driving & Track Experience </h3>
                  <h3> Porsche Communities </h3>

                  <h3>Golf Sports</h3>
                  <h3>Stories - People.passion.places</h3>
                </div>
              )}
              {selectmenu === "Services" && (
                <div className="vehicleitem">
                  <h3>Service & Maintenance</h3>
                  <h3>Vehicle Accessories</h3>
                  <h3> Individualisation </h3>

                  <h3>Classic – Service & Parts</h3>
                  <h3>Approved – Pre-owned Cars & Warranty</h3>
                </div>
              )}
              {selectmenu === "Find a Dealer" && (
                <div className="vehicleitem">
                  <h3>Dealer not available</h3>
                </div>
              )}{" "}
            </>
          ) : (
            subModels()
          )}
        </div>

        <div className="close">
          <i
            className="bi bi-x"
            onClick={() => {
              closeLeftSlide();
            }}
          ></i>
        </div>
      </div>
    </section>
  );
};

export default Leftslide;

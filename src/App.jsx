import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Components/home";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MenuProvider } from "./Components/MenuContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Carmain from "./Components/CarMain/CarMain";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const displayCar = useSelector((state) => state.car.selectedCar);
  console.log(displayCar);
  const navigateTo = useNavigate();
  // useEffect(() => {
  //   displayCar ? "" : navigateTo("/");
  // }, []);

  return (
    <Routes>
      <>
        <Route path="/" element={<Home />} />
        <Route path="/carmain" element={<Carmain />} />
      </>
    </Routes>
  );
}

export default App;

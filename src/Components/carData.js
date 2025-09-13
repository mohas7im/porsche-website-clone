import dropcar1 from "../assets/taycandrop.webp";
import dropcar2 from "../assets/911drop.webp";
import dropcar3 from "../assets/macandrop.webp";
import dropcar4 from "../assets/panameradrop.webp";
import dropcar5 from "../assets/718drop.webp";

import boxter718 from "../assets/subcars/718boxter.avif";
import cayman718 from "../assets/subcars/718cayman.avif";
import caymangt4rs718 from "../assets/subcars/718caymangt4rs.avif";
import spyderrs718 from "../assets/subcars/718spyderrs.avif";

import gt3rs from "../assets/subcars/911gt3.png";
import gt3 from "../assets/subcars/911gt3.png";
import turbo911 from "../assets/subcars/911turbo.png";
import cabriolet911 from "../assets/subcars/cabriolet911.png";
import carrera911 from "../assets/subcars/carrera911.png";

import macan from "../assets/subcars/macan.avif";

import panamera from "../assets/subcars/panamera.avif";
import panameras from "../assets/subcars/panamera4s.avif";
import taycan from "../assets/subcars/taycan.avif";
import taycansport from "../assets/subcars/taycansport.avif";



export const carData = [
  {
    name: "Taycan",
    img: dropcar1,
    fuel: "Electric",
    submodels: [
      { name: "Taycan 4", img: taycan },
      { name: "Taycan Sport", img: taycansport },
    ],
  },
  {
    name: "911",
    img: dropcar2,
    fuel: "Gasoline",
    submodels: [
      { name: "911 Carrera", img: carrera911 },
      { name: "911 Turbo", img: turbo911 },
      { name: "911 GT3", img: gt3 },
      { name: "911 GT3RS", img: gt3rs },
      { name: "911 Cabriolet", img: cabriolet911 },
    ],
  },
  {
    name: "Macan",
    img: dropcar3,
    fuel: "Gasoline",
    submodels: [{ name: "Macan S", img: macan }],
  },
  {
    name: "Panamera",
    img: dropcar4,
    fuel: "Gasoline",
    submodels: [
      { name: "Panamera ", img: panamera },
      { name: "Panamera Sport", img: panameras },
    ],
  },
  {
    name: "718",
    img: dropcar5,
    fuel: "Gasoline",
    submodels: [
      { name: "Boxter", img: boxter718 },
      { name: "Cayman", img: cayman718 },
      { name: "Cayman GT4 RS", img: caymangt4rs718 },
      { name: "Spyder RS", img: spyderrs718 },
    ],
  },
];

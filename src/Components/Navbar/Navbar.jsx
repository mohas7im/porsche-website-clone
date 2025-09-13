import "./Navbar.css";
import { MenuContext } from "../MenuContext";
import { useContext } from "react";

const Navbar = ({ fontColor }) => {
  const { openLeftSlide } = useContext(MenuContext);

  return (
    <nav className="fixed-top">
      <div className="navbar">
        <div className="container" style={{ color: fontColor }}>
          <span
            className="point"
            onClick={openLeftSlide}
          >
            <i className="bi bi-list pgap"></i>Menu
          </span>
          <span>PORSCHE</span>
          <span>
            <i className="bi bi-person"></i>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

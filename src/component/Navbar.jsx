import { React, useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import "../styles/navBar.css";
import { ThemeContext } from "../context/ThemeContext";

export default function NavBar() {
  const location = useLocation();
  const { changeTheme, toggleModeColor } = useContext(ThemeContext);

  return (
    <div className={`navBar ${changeTheme}`}>
      <Link to="/">
        <img src="/assets/ZT.png" className="iconZT" />
      </Link>
      <ul>
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={location.pathname === "/projects" ? "active" : ""}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>
        </li>
        <li>
          <img
            src={
              changeTheme === "light" ? "/assets/light.png" : "/assets/dark.png"
            }
            className="lightIcon"
            alt="Icon for toggle mode"
            onClick={toggleModeColor}
          />
        </li>
      </ul>
    </div>
  );
}

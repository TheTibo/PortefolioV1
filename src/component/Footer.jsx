import React, { useContext } from "react";
import "../styles/footer.css";
import ThemeContext from "../context/ThemeContext";

export default function Footer() {
  const { changeTheme } = useContext(ThemeContext);
  return (
    <div className="footerContainer">
      <a
        href="https://github.com/TheTibo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="linkIcon"
          src={
            changeTheme === "light"
              ? "/assets/github.png"
              : "/assets/githubgold.png"
          }
          alt="Github Link"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/thibault-zhou-thetibo/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="linkIcon"
          src={
            changeTheme === "light"
              ? "/assets/linkedin.png"
              : "/assets/linkedingold.png"
          }
          alt="Linkedin Link"
        />
      </a>
    </div>
  );
}

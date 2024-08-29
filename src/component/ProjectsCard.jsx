import { React, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import dataProjects from "../DataProjects";

import "../styles/projectsCard.css";
import "../styles/footer.css";
import ThemeContext from "../context/ThemeContext";

export default function ProjectsCard() {
  const { changeTheme, ToggleModeColor } = useContext(ThemeContext);

  const { id } = useParams();
  const project = dataProjects.find((p) => p.id === parseInt(id));

  const [showedPicture, setShowedPicture] = useState(0);

  const nextPicture = () => {
    setShowedPicture((pictureNumber) =>
      pictureNumber === project.images.length - 1 ? 0 : pictureNumber + 1
    );
  };

  const previousPicture = () => {
    setShowedPicture((pictureNumber) =>
      pictureNumber === 0 ? project.images.length - 1 : pictureNumber - 1
    );
  };

  return (
    <div className="cardContainer">
      <h1>{project.name}</h1>
      <p>{project.description}</p>

      <div className="carousel">
        <img
          className="imagesCards"
          src={project.images[showedPicture]}
          alt={`${project.name} image`}
        />
        <div className="imagesSwap">
          <img
            src={
              changeTheme === "light"
                ? "/assets/arrowleftblack.png"
                : "/assets/arrowleftgold.png"
            }
            className="arrow"
            onClick={previousPicture}
          />

          {project.images.map((image, index) => (
            <span
              key={index}
              className={`carouselDot ${changeTheme} ${
                showedPicture === index ? "active" : ""
              }`}
              onClick={() => setShowedPicture(index)}
            ></span>
          ))}
          <img
            src={
              changeTheme === "light"
                ? "/assets/arrowrightblack.png"
                : "/assets/arrowrightgold.png"
            }
            className="arrow"
            onClick={nextPicture}
          />
        </div>
      </div>

      <h2 className="lineTitle">Technologies</h2>
      <div className="technologiesCard">
        {project.technologies.map((technologie, index) => (
          <div key={index} className="technologieItem">
            <img src={technologie.image} alt={`${technologie.name} image`} />
            <p>{technologie.name}</p>
          </div>
        ))}
      </div>
      <div className="extraInfo">
        <div className="roleAndDate">
          <h2 className="lineTitle">Roles</h2>
          <p>{project.role}</p>
        </div>
        <div className="roleAndDate">
          <h2 className="lineTitle">Date</h2>
          <p>{project.date}</p>
        </div>
      </div>
      <h2 className="lineTitle">Website</h2>
      <a
        className="projectLink"
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {project.name}
      </a>
    </div>
  );
}

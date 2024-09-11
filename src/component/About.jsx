import { React, useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import dataMe from "../DataMe";
import "../styles/about.css";

export default function About() {
  const { changeTheme } = useContext(ThemeContext);
  const [data, setData] = useState(dataMe);

  return (
    <div className={`aboutContainer ${changeTheme}`}>
      <h1>{data.name}</h1>
      <div className="pictureAndDescription">
        <img src={data.picture} className="profilPic" />
        <div className="desc">
          <p>{data.description}</p>
          <p>{data.description2}</p>
        </div>
      </div>
      <h2>My Skills</h2>
      <div className="skillsContainer">
        {data.technologies.map((technologie, index) => (
          <div key={index} className="imgAndTech">
            <img
              src={
                changeTheme === "light" ? technologie.image : technologie.image2
              }
              alt={`${technologie.name} image`}
            />
            <p> {technologie.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

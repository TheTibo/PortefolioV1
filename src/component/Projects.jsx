import { React, useState } from "react";
import { Link } from "react-router-dom";

import dataProjects from "../DataProjects";
import "../styles/projects.css";

export default function Projects() {
  const [projects, setProjects] = useState(dataProjects);

  return (
    <div className="projectsContainer">
      <div className="projectsContent">
        <h1>My Projects</h1>
        <div className="everyProjects">
          {projects.map((project) => (
            <div key={project.id} className="projects">
              <Link to={`/projects/${project.id}`}>
                <div className="imageProject">
                  <img src={project.images[0]} alt={`${project.name} image`} />
                  <h2>{project.name}</h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

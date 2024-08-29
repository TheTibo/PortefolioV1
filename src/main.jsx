import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import About from "./component/About.jsx";
import Projects from "./component/Projects.jsx";
import Contact from "./component/Contact.jsx";
import ProjectsCard from "./component/ProjectsCard.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      { path: "/projects/:id", element: <ProjectsCard /> },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

import { useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";
import "./App.css";

function App() {
  const { changeTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = changeTheme;
  }, [changeTheme]);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

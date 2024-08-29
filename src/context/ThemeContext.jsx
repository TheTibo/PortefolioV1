import { React, createContext, useState } from "react";

export const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [changeTheme, setChangeTheme] = useState(
    localStorage.getItem("Theme Color") || "light"
  );

  const toggleModeColor = () => {
    const theTheme = changeTheme === "light" ? "dark" : "light";
    setChangeTheme(theTheme);
    localStorage.setItem("Theme Color", theTheme);
  };

  return (
    <ThemeContext.Provider value={{ changeTheme, toggleModeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

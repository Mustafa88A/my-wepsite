import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="w-[99%] h-14 flex items-center justify-end fixed">
      <button
        onClick={toggleTheme}
        className="p-2 w-12 h-12  bg-gray-800 dark:bg-white text-white rounded  sticky"
      >
        {theme === "dark" ? "☀️" : "🌑"}
      </button>
    </div>
  );
};

export default ThemeToggle;

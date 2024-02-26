import React, { useEffect, useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  const [isMounted, setIsMounted] = useState<boolean>(false);

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  if (!isMounted) {
    return null;
  }

  return theme === "dark" ? (
    <IoSunny className="hover:cursor-pointer" size={24} onClick={handleClick} />
  ) : (
    <IoMoon className="hover:cursor-pointer" size={24} onClick={handleClick} />
  );
};

export default ThemeToggle;

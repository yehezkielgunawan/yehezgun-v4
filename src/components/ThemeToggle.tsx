import { useEffect, useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.getItem("theme") : "light",
  );

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
    localStorage.setItem("theme", String(theme));
  }, [theme]);

  if (!isMounted) {
    return (
      <div className="w-6 h-6 rounded-lg animate-pulse bg-slate-200 dark:bg-slate-700"></div>
    );
  }

  return theme === "dark" ? (
    <IoSunny className="hover:cursor-pointer" size={24} onClick={handleClick} />
  ) : (
    <IoMoon className="hover:cursor-pointer" size={24} onClick={handleClick} />
  );
};

export default ThemeToggle;

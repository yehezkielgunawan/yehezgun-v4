type Theme = "light" | "dark";

const getTheme = (): Theme => {
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark" ? "dark" : "light";
  }
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
};

const theme: Theme = getTheme();

if (theme === "light") {
  document.documentElement.classList.remove("dark");
} else {
  document.documentElement.classList.add("dark");
}

window.localStorage.setItem("theme", theme);

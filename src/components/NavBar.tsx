import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  const menuList = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Projects",
      url: "/projects",
    },
    {
      name: "Blog",
      url: "/blog",
    },
    {
      name: "About Me",
      url: "/aboutme",
    },
  ];

  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        {menuList.map(item => (
          <a
            href={item.url}
            className="font-bold hover:bg-gradient-to-r from-primary-200 to-primary-500 rounded-md dark:from-primary-500 dark:to-primary-800"
          >
            {item.name}
          </a>
        ))}
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default NavBar;

import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

const CurrentFavoriteTechStacks = () => {
  const favoriteTechStacks = [
    {
      name: "React",
      icon: FaReact,
    },
    {
      name: "Typescript",
      icon: SiTypescript,
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
    },
  ];
  return (
    <section className="mt-8 space-y-4">
      <h3>Current Favorite Tech Stack</h3>
      <div className="flex items-center gap-6">
        {favoriteTechStacks.map(stack => (
          <div className="group relative">
            <stack.icon size={36} />
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black p-0.5 text-white opacity-0 transition-opacity duration-75 group-hover:opacity-100 dark:bg-white dark:text-black">
              <p>{stack.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurrentFavoriteTechStacks;

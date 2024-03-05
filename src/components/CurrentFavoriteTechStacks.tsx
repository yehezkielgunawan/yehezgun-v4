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
          <div className="relative group">
            <stack.icon size={36} />
            <div className="opacity-0 group-hover:opacity-100 absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black text-white rounded whitespace-nowrap transition-opacity duration-75">
              <p>{stack.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurrentFavoriteTechStacks;

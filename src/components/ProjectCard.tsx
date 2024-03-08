import { useState, useEffect } from "react";
import { HiExternalLink } from "react-icons/hi";

type ProjectCardProps = {
  projectName: string;
  projectDesc: string;
  projectIcon: {
    src: string;
    width: number;
    height: number;
    format: "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "svg" | "avif";
  };
  projectUrl: string;
  projectStacks: string[];
};

const ProjectCard = ({
  projectName,
  projectDesc,
  projectUrl,
  projectIcon,
  projectStacks,
}: ProjectCardProps) => {
  const [theme, setTheme] = useState<string>("light");
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const classList = document.documentElement.classList;
      const checkTheme = () => {
        setTheme(classList.contains("dark") ? "dark" : "light");
      };

      // Initialize a MutationObserver
      const observer = new MutationObserver(checkTheme);

      // Start observing document.documentElement for changes to the 'class' attribute
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });

      // Clean up the observer when the component unmounts
      return () => observer.disconnect();
    }
  }, []);

  if (!isMounted) return null;

  return (
    <a
      href={projectUrl}
      className="group hover:-translate-y-0.5"
      target="_blank"
    >
      <div className="flex h-full flex-col justify-between gap-4 rounded border border-gray-400 p-2 dark:border-white">
        <div className="flex items-center justify-between gap-4">
          <h3>{projectName}</h3>
          <HiExternalLink size={24} />
        </div>
        <div className="flex items-center justify-between gap-4">
          <p>{projectDesc}</p>
          <img
            alt="project-icon"
            src={projectIcon.src}
            width={64}
            height={64}
          />
        </div>
        <div className="flex items-center gap-4">
          {projectStacks.map(stack => (
            <img
              src={`/stacks/${theme}/${stack}.svg`}
              alt="stack"
              width={32}
              height={32}
            />
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;

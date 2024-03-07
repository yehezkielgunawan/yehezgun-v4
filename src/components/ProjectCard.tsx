import React, { useEffect, useState } from "react";
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
              src={`/stacks/light/${stack}.svg`}
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

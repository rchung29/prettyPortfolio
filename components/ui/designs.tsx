// components/ProjectSection.tsx
import * as React from "react";
import Link from "next/link";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Github, Link2, Dribbble, Figma } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  githubLink?: string;
  liveLink?: string;
}
interface TechnologyInfo {
  name: string;
  category: string; // 'language', 'framework', 'library', etc.
}

interface ProjectSectionProps {
  title: string;
  subtitle: string;
  technologies: TechnologyInfo[];
  projects: ProjectCardProps[];
}

const TechnologyBadge: React.FC<TechnologyInfo> = ({ name, category }) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <span className="inline-block cursor-default bg-main hover:bg-blueRyan hover:border-white transition ease-in-out rounded-md border px-4 py-2 text-sm font-medium text-white mr-2 mb-2">
        {name}
      </span>
    </TooltipTrigger>
    <TooltipContent side="top">{category}</TooltipContent>
  </Tooltip>
);

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  githubLink,
  liveLink,
}) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle className="font-semibold">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-text font-normal">{subtitle}</CardContent>
    <CardFooter>
      <div className="flex items-center space-x-3">
        {githubLink && (
          <Link
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
            className="rounded-full p-2 text-white bg-pink-400 hover:bg-pink-500 transition-colors"
          >
            <Dribbble className="h-5 w-5" />
          </Link>
        )}
        {liveLink && (
          <a
            href={liveLink}
            className="rounded-full p-2 text-white bg-violet-400 hover:bg-violet-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live Site"
          >
            <Figma className="h-5 w-5" />
          </a>
        )}
      </div>
    </CardFooter>
  </Card>
);

const DesignSection: React.FC<DesignSectionProps> = ({
  title,
  subtitle,
  technologies,
  projects,
}) => {
  return (
    <TooltipProvider>
      <section className="">
        <div className="flex flex-col items-start space-y-4 mb-4">
          <div>
            <h2 className="text-lg text-white">{title}</h2>
            <p className="text-lg text-text font-medium">{subtitle}</p>
          </div>
          <div className="flex flex-wrap">
            {technologies.map((tech) => (
              <TechnologyBadge
                key={tech.name}
                name={tech.name}
                category={tech.category}
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </TooltipProvider>
  );
};

export default DesignSection;

// pages/projects.tsx
"use client";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import ProjectSection from "@/components/ui/project";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import React, { useEffect } from "react";

const ProjectsHeader = () => {
  return (
    <div className="flex flex-col space-y-4 items-start justify-between">
      <Link
        href="/"
        className="text-lg text-text hover:text-white transition ease-in-out"
      >
        &larr; Go Back
      </Link>
      <h1 className="text-5xl font-bold animate-fadeIn opacity-0 delay-200">
        To Build or Not To Build
      </h1>
      <p className="text-lg text-text animate-fadeIn opacity-0 delay-300">
        Building software should be fun. I totally never forget about a project
        (I made those repos private).
      </p>
    </div>
  );
};

const ProjectsPage = () => {
  useEffect(() => {
    // Check if the page is not at the top when it loads
    if (window.scrollY !== 0) {
      // Scroll to the top
      window.scrollTo(0, 0);
    }
  }, []);
  const PropEdge = {
    title: "PropEdge",
    subtitle:
      "Designed to let me gamble more efficiently. Cross compare lines between sports books and DFS platforms to get the best edge.",
    technologies: [
      { name: "Javascript", category: "Language" },
      { name: "Python", category: "Language" },
      { name: "Gunicorn", category: "Web Server" },
      { name: "NGINX", category: "Reverse Proxy" },
      { name: "Next.js", category: "Framework" },
      { name: "MongoDB", category: "Database" },
      { name: "FastAPI", category: "Framework" },
      { name: "TailwindCSS", category: "Library" },
      { name: "Vercel", category: "Hosting" },
    ],
    projects: [
      {
        title: "PropEdge Website",
        subtitle:
          "Built a Next.js website to display and categorize the bets to place by most probable.",
        githubLink: "https://gitryan.vercel.app/repos/sportsbook_frontend",
        liveLink: "https://sportsbook-frontend-wh8r.vercel.app/",
      },
      {
        title: "GetProps API",
        subtitle:
          "FastAPI to retrieve and manage data from the MongoDB database.",
        githubLink: "https://gitryan.vercel.app/repos/getprops-api",
      },
      {
        title: "Sportsbook Data Script",
        subtitle:
          "Built a python script to retrieve the data from scraped private sports book APIs. Totally not unethical.",
        githubLink: "https://gitryan.vercel.app/repos/getprops",
      },
      // ... add more project objects here
    ],
  };
  const GitRyan = {
    title: "GitRyan",
    subtitle:
      "Github is boring. Thats why I made GitRyan. Okay you got me, I was actually just bored and wanted to figure out how to host my own Git server.",
    technologies: [
      { name: "Python", category: "Language" },
      { name: "Django", category: "Framework" },
      { name: "Flask", category: "Framework" },
      { name: "Gunicorn", category: "Web Server" },
      { name: "NGINX", category: "Reverse Proxy" },
      { name: "GitPython", category: "Library" },
      { name: "Bootstrap", category: "Library" },
      { name: "Azure", category: "Hosting" },
      { name: "Heroku", category: "Hosting" },
    ],
    projects: [
      {
        title: "GitRyan Website",
        subtitle: "Yes, I spent 3 hours trying to fix 1 NGINX rule.",
        liveLink: "https://gitryan.vercel.app/repos/getprops",
      },
    ],
  };
  const Streamify = {
    title: "Streamify",
    subtitle:
      "View and sort through music. Filter by most popular in your country and global charts. See songs related to your favorites.",
    technologies: [
      { name: "Javascript", category: "Language" },
      { name: "Create-React-App", category: "Framework" },
      { name: "Redux", category: "Library" },
      { name: "TailwindCSS", category: "Library" },
      { name: "Netlify", category: "Hosting" },
    ],
    projects: [
      {
        title: "Streamify Website",
        subtitle:
          "Built with create-react-app. Crazy how fast best practice changes isnt? See music details.",
        githubLink: "https://gitryan.vercel.app/repos/streamify",
        liveLink: "https://streamify-project.netlify.app/",
      },
    ],
  };
  const FreeFitnessPal = {
    title: "Stupid Simple FreeFitnessPal",
    subtitle:
      "Track your fitness goals while being able to save presets and scan barcodes. Don’t pay for MyFitnessPal.",
    technologies: [
      { name: "Dart", category: "Language" },
      { name: "Flutter", category: "Framework" },
      { name: "Firebase", category: "Database" },
      { name: "MaterialUI", category: "Library" },
    ],
    projects: [
      {
        title: "Flutter App",
        subtitle:
          "Worked on it with Flutter, primarily for IOS. Scan barcodes for free. #Don’tPayForMyFitnessPal",
        githubLink: "https://gitryan.vercel.app/repos/freefitnesspal",
      },
    ],
  };
  return (
    <div className="bg-main text-white min-h-screen">
      <div className="w-screen bg-blueRyan bg-opacity-20 py-2 px-6 text-center">
        <span className="text-xs text-blueRyan">
          Ive created my own git server! Click any link to view all of my source
          code.
        </span>
      </div>
      <div className="">
        <div className="p-6">
          <ProjectsHeader />
        </div>
        <Separator className="my-1 animate-fadeIn delay-500 opacity-0" />
        <div className="p-6">
          <div className="opacity-0 animate-fadeIn delay-700">
            <ProjectSection
              title={PropEdge.title}
              subtitle={PropEdge.subtitle}
              technologies={PropEdge.technologies}
              projects={PropEdge.projects}
            ></ProjectSection>
          </div>
        </div>
        <div className="px-6 pb-6">
          <div className="opacity-0 animate-fadeIn delay-700">
            <ProjectSection
              title={GitRyan.title}
              subtitle={GitRyan.subtitle}
              technologies={GitRyan.technologies}
              projects={GitRyan.projects}
            ></ProjectSection>
          </div>
        </div>
        <div className="px-6 pb-6">
          <div className="opacity-0 animate-fadeIn delay-700">
            <ProjectSection
              title={Streamify.title}
              subtitle={Streamify.subtitle}
              technologies={Streamify.technologies}
              projects={Streamify.projects}
            ></ProjectSection>
          </div>
        </div>
        <div className="px-6 pb-6">
          <div className="opacity-0 animate-fadeIn delay-700">
            <ProjectSection
              title={FreeFitnessPal.title}
              subtitle={FreeFitnessPal.subtitle}
              technologies={FreeFitnessPal.technologies}
              projects={FreeFitnessPal.projects}
            ></ProjectSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

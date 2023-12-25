"use client";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import DesignSection from "@/components/ui/designs";
import React, { useEffect } from "react";

const DesignHeader = () => {
  return (
    <div className="flex flex-col space-y-4 items-start justify-between">
      <Link
        href="/"
        className="text-lg text-text hover:text-white transition ease-in-out"
      >
        &larr; Go Back
      </Link>
      <h1 className="text-5xl font-bold animate-fadeIn opacity-0 delay-200">
        Pretty Colors. Pretty Pixels.
      </h1>
      <p className="text-lg text-text animate-fadeIn opacity-0 delay-300">
        Scroll down to see me ramble about design decisions and put pretty
        colors in Figma.
      </p>
    </div>
  );
};

const DesignPage = () => {
  useEffect(() => {
    // Check if the page is not at the top when it loads
    if (window.scrollY !== 0) {
      // Scroll to the top
      window.scrollTo(0, 0);
    }
  }, []);
  const RoomMe = {
    title: "RoomMe Mobile App Design",
    subtitle:
      "Full breakdown of UI/UX decisions including structure, colors, layout. Not all pages could be shown due to company privacy.",
    technologies: [
      { name: "Figma", category: "Design" },
      { name: "Illustrator", category: "Design" },
      { name: "MantineUI", category: "Color Palette" },
    ],
    projects: [
      {
        title: "Dribbble Writeup",
        subtitle:
          "Full in-depth writeup behind the design. Make me dribbble famous!",
        githubLink:
          "https://dribbble.com/shots/23120179-RoomMe-Mobile-App-Design",
      },
      {
        title: "Figma File",
        subtitle:
          "Figma file for comparison. Highlights for company privacy purposes.",
        liveLink:
          "https://www.figma.com/file/e9vqikQZ7qHbh8O7Gigayd/RoomMe-Redesign?type=design&node-id=0%3A1&mode=design&t=YUbly2Vri5LKP2YM-1",
      },
    ],
  };
  const Pellucid = {
    title: "Pellucid",
    subtitle:
      "Design files for work at Ginia Group. Only landing page could be shown as well as a published demo.",
    technologies: [
      { name: "Figma", category: "Design" },
      { name: "TailwindUI", category: "Color Palette" },
    ],
    projects: [
      {
        title: "Figma File",
        subtitle: "Figma file for landing page design. Single page scroll.",
        liveLink:
          "https://www.figma.com/file/S2ids1smk2U1O7zYOmPWiV/Pellucid-Wireframe?type=design&node-id=0%3A1&mode=design&t=OuFHtvpnZPPwDEKt-1",
      },
    ],
  };
  const OpenPay = {
    title: "Open Pay Landing Page",
    subtitle:
      "Mockup SAAS/Fintech Landing Page. Built it around a preexisting design system on Figma community.",
    technologies: [{ name: "Figma", category: "Design/Design System" }],
    projects: [
      {
        title: "Dribbble Writeup",
        subtitle:
          "Decision write up and my thought process on designing high-converting landing pages.",
        githubLink: "https://dribbble.com/shots/23120409-OpenPay-Landing-Page",
      },
      {
        title: "Figma File",
        subtitle: "Color pallette and raw design file for website.",
        liveLink:
          "https://www.figma.com/file/jkLalsTcu4aPqaGxuC2ZwH/Banking-web-App-UI-Kit?type=design&node-id=205%3A26&mode=design&t=FIhT2SgYTYGRxklr-1",
      },
    ],
  };
  return (
    <div className="bg-main text-white min-h-screen">
      <div className="">
        <div className="p-6">
          <DesignHeader />
        </div>
        <Separator className="my-1 animate-fadeIn delay-500 opacity-0" />
        <div className="p-6">
          <div className="opacity-0 animate-fadeIn delay-700">
            <DesignSection
              title={RoomMe.title}
              subtitle={RoomMe.subtitle}
              technologies={RoomMe.technologies}
              projects={RoomMe.projects}
            ></DesignSection>
          </div>
        </div>
        <div className="p-6">
          <div className="opacity-0 animate-fadeIn delay-900">
            <DesignSection
              title={Pellucid.title}
              subtitle={Pellucid.subtitle}
              technologies={Pellucid.technologies}
              projects={Pellucid.projects}
            ></DesignSection>
          </div>
        </div>
        <div className="p-6">
          <div className="opacity-0 animate-fadeIn delay-1100">
            <DesignSection
              title={OpenPay.title}
              subtitle={OpenPay.subtitle}
              technologies={OpenPay.technologies}
              projects={OpenPay.projects}
            ></DesignSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignPage;

"use client";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import DesignSection from "@/components/ui/designs";
import React, { useEffect } from "react";
import WorkCardGroup from "@/components/ui/workcards";

const WorkHeader = () => {
  return (
    <div className="flex flex-col space-y-4 items-start justify-between">
      <Link
        href="/"
        className="text-lg text-text hover:text-white transition ease-in-out"
      >
        &larr; Go Back
      </Link>
      <h1 className="text-5xl font-bold animate-fadeIn opacity-0 delay-200">
        Software Engineer. Designer At Heart.
      </h1>
      <p className="text-lg text-text animate-fadeIn opacity-0 delay-300">
        Ive been doing it all. I love to code but I love auto-layout more.
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

  return (
    <div className="bg-main text-white min-h-screen">
      <div className="">
        <div className="p-6">
          <WorkHeader />
        </div>
        <Separator className="my-1 animate-fadeIn delay-500 opacity-0" />
        <div className="p-6">
          <WorkCardGroup></WorkCardGroup>
        </div>
      </div>
    </div>
  );
};

export default DesignPage;

// components/Profile.tsx
import Image from "next/image";
import { Separator } from "./separator";
import { Linkedin, Mail, FileCheck2, Dribbble } from "lucide-react";
import StatusUpdates from "./status";
import { useState, useEffect } from "react";

const Profile = () => {
  return (
    <div className="flex flex-col items-start md:flex-row md:justify-between">
      <div className="flex flex-col items-start mb-4 md:mb-0">
        <Image
          src="/me.png"
          width={100}
          height={100}
          alt="Picture of the author"
          className="my-4 animate-fadeIn opacity-0 delay-100"
        />
        <div>
          <h1 className="text-5xl font-bold pb-3 animate-fadeIn opacity-0 delay-200">
            Ryan Chung
          </h1>
          <p className="text-lg text-text animate-fadeIn opacity-0 delay-300">
            CS @ UVA. Software Developer. Designer.
          </p>
        </div>
        <div className="flex h-5 items-center space-x-4 text-sm mt-6 animate-fadeIn opacity-0 delay-400">
          <a
            href={"www.google.com"}
            className="flex items-center space-x-2 hover:text-white text-text transition-colors duration-200"
          >
            <Mail className="h-5"></Mail>
            <span className="text-md">Email</span>
          </a>
          <Separator orientation="vertical" />
          <a
            href={"www.google.com"}
            className="flex items-center space-x-2 hover:text-white text-text transition-colors duration-200"
          >
            <FileCheck2 className="h-5"></FileCheck2>
            <span className="text-md">Resume</span>
          </a>
          <Separator orientation="vertical" />
          <a
            href={"www.google.com"}
            className="flex items-center space-x-2 hover:text-white text-text transition-colors duration-200"
          >
            <Linkedin className="h-5"></Linkedin>
            <span className="text-md">LinkedIn</span>
          </a>
          <Separator orientation="vertical" />
          <a
            href={"www.google.com"}
            className="flex items-center space-x-2 hover:text-white text-text transition-colors duration-200"
          >
            <Dribbble className="h-5"></Dribbble>
            <span className="text-md">Dribbble</span>
          </a>
        </div>
      </div>
      <StatusUpdates></StatusUpdates>
    </div>
  );
};

export default Profile;

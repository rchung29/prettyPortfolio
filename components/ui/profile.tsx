// components/Profile.tsx
import Image from "next/image";
import { Separator } from "./separator";
import { Linkedin, Mail, FileCheck2, Dribbble } from "lucide-react";
import StatusUpdates from "./status";
import { useState, useEffect } from "react";
import Link from "next/link";

const Profile = () => {
  return (
    <div className="flex flex-col items-start md:flex-row md:justify-between mb-6">
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
        <div className="flex h-5 items-center space-x-4 text-sm mt-6 animate-fadeIn opacity-0 delay-700">
          <Link
            href= "mailto:rchung793@gmail.com"
            className="flex items-center space-x-2 hover:text-white text-text transition-colors duration-200"
          >
            <Mail className="h-5"></Mail>
            <span className="text-md hidden sm:inline-block">Email</span>
          </Link>
          <Separator orientation="vertical" />
          <Link
            href="https://drive.google.com/file/d/1hEkHGCxlGo9oTFvwuoGF1kC4H5_UJw_e/view?usp=sharing"
            className="flex items-center space-x-2 hover:text-white text-text transition-colors duration-200"
          >
            <FileCheck2 className="h-5"></FileCheck2>
            <span className="text-md hidden sm:inline-block">Resume</span>
          </Link>
          <Separator orientation="vertical" />
          <Link
            href="https://www.linkedin.com/in/rchung28/"
            className="flex items-center space-x-2 hover:text-white text-text transition-colors duration-200"
          >
            <Linkedin className="h-5"></Linkedin>
            <span className="text-md hidden sm:inline-block">LinkedIn</span>
          </Link>
          <Separator orientation="vertical" />
          <Link
            href="https://dribbble.com/rchung28"
            className="flex items-center space-x-2 hover:text-white text-text transition-colors duration-200"
          >
            <Dribbble className="h-5"></Dribbble>
            <span className="text-md hidden sm:inline-block">Dribbble</span>
          </Link>
        </div>
      </div>
      <StatusUpdates></StatusUpdates>
    </div>
  );
};

export default Profile;

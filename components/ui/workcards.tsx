"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./button";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Inter, Azeret_Mono } from "next/font/google";
const azeretRegular = Azeret_Mono({
  weight: "400",
  subsets: ["latin"],
});
const azeretMedium = Azeret_Mono({
  weight: "500",
  subsets: ["latin"],
});

const WorkCardGroup = () => {
  return (
    <div className="flex flex-nowrap space-x-14 overflow-x-auto w-full smooth-scroll scroll-snap-type scroll-snap-align py-3">
      <Card className="animate-fadeUp delay-100 opacity-0 min-w-[400px]">
        <CardHeader>
          <CardTitle
            className={`${azeretMedium.className} text-white text-3xl`}
          >
            Univ. of Virginia
          </CardTitle>
          <CardDescription className={`text-base`}>
            <div>
              <h2 className="text-orange-400 text-base">
                B.S in Computer Science
              </h2>
              <p className="text-text text-base">08/21 - 05/25</p>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="text-sm font-medium text-white space-y-4">
            <li>- Cum. GPA: 3.0, Computer Science GPA: 3.6</li>
            <li>
              - CS 3130 Teaching Assistant: Provided one-on-one tutoring
              sessions for struggling students and assisted in leading labs for
              50+ students.
            </li>
            <li>
              - Relevant Courses: Data Structures and Algorithms, Computer
              Systems and Organization, Advanced Software Development
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card className="animate-fadeUp delay-300 opacity-0 min-w-[400px]">
        <CardHeader>
          <CardTitle
            className={`${azeretMedium.className} text-white text-3xl`}
          >
            RoomMe
          </CardTitle>
          <CardDescription className={`text-base`}>
            <div>
              <h2 className="text-blueRyan text-base">
                Software Engineering Intern
              </h2>
              <p className="text-text text-base">06/23 - 09/23</p>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="text-sm font-medium text-white space-y-4">
            <li>
              - Led development for a resident management and custom ad
              dashboard with Flutter and Firebase, resulted in the acquisition
              of a $500K contract and placement in up to 160 apartment complexes
              by end of year.
            </li>
            <li>
              - Automated social media growth through the creation of Python
              scripts, resulting in a 200% increase in followers, 50% growth in
              users, and the capability to grow an unlimited number of accounts
              autonomously.
            </li>
            <li>
              - Executed a UI/UX redesign for the Flutter app, enhancing user
              experience and increasing user retention by 10%.
            </li>
            <li>
              - Optimized Firebase CRUD operations, implemented efficient
              procedures and reduced operation costs by 3%.
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card className="animate-fadeUp delay-500 opacity-0 min-w-[400px]">
        <CardHeader>
          <CardTitle
            className={`${azeretMedium.className} text-white text-3xl`}
          >
            Ginia Group
          </CardTitle>
          <CardDescription className={`text-base`}>
            <div>
              <h2 className="text-blueRyan text-base">
                Software Engineering Intern
              </h2>
              <p className="text-text text-base">06/22 - 08/22</p>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="text-sm font-medium text-white space-y-4">
            <li>
              - Spearheaded research on cryptocurrency to assess its potential
              to send funds to overseas non-profit organizations.
            </li>
            <li>
              - Wrote SQL queries to parse cryptocurrency transactions on
              Dune.com, identified activity trends to aid in research.
            </li>
            <li>
              - Developed a secure django application integrated with postgres
              database to streamline donation acceptance and distribution
              process for 8 partner non-profits, resulting in a 40% reduction in
              administrative overhead.
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card className="animate-fadeUp delay-700 opacity-0 min-w-[400px]">
        <CardHeader>
          <CardTitle
            className={`${azeretMedium.className} text-white text-3xl`}
          >
            ProxyDashboards
          </CardTitle>
          <CardDescription className={`text-base`}>
            <div>
              <h2 className="text-blueRyan text-base">Software Developer</h2>
              <p className="text-text text-base">01/18 - 08/21</p>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="text-sm font-medium text-white space-y-4">
            <li>
              - Designed and developed high-converting landing pages ensuring
              seamless user experience and driving increased customer
              engagement; companies saw on average an increase of 10% in
              registration and 5% in revenue.
            </li>
            <li>
              - Launched 6 React apps to manage residential proxy subscriptions,
              on average increasing user retention by 5%.
            </li>
            <li>
              - Implemented features to allow owners to set traffic limits, view
              traffic usage and users to view and cancel subscriptions.
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card className="animate-fadeUp delay-900 opacity-0 min-w-[400px]">
        <CardHeader>
          <CardTitle
            className={`${azeretMedium.className} text-white text-3xl`}
          >
            RyanDZN
          </CardTitle>
          <CardDescription className={`text-base`}>
            <div>
              <h2 className="text-pink-400 text-base">Founder/Lead Designer</h2>
              <p className="text-text text-base">01/18 - 08/21</p>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="text-sm font-medium text-white space-y-4">
            <li>
              - Created and implemented innovative user interface designs for
              100+ clients, resulting in an average increase of 20% in website
              conversion rates.
            </li>
            <li>
              - Developed and executed branding concepts for client projects,
              leading to a 15% increase in brand recognition and customer
              engagement.
            </li>
            <li>
              - Produced promotional graphics and videos that generated over 1
              million views across various social media platforms, resulting in
              a 30% increase in client inquiries and sales.
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkCardGroup;

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

const CardGroup = () => {
  return (
    <div className="flex flex-row justify-between space-x-14">
      <Card className="animate-fadeUp delay-900 opacity-0">
        <CardHeader>
          <CardTitle className={`${azeretMedium.className} text-3xl`}>
            Software
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className={`${azeretRegular.className} text-text`}>
            I build projects to test out new technologies and automate tasks
            that I think are boring. Thats what coding is for right?
          </p>
          <Image
            src="/software_img.svg"
            width={157}
            height={32}
            alt="Picture of the author"
            className="mt-8 mb-20"
          />
        </CardContent>
        <CardFooter>
          <Button
            variant="linkBlue"
            className={`${azeretRegular.className} text-white p-0`}
          >
            <Link href="/software">
              <div className="flex items-center">
                Dive Deeper <ArrowRightIcon className="h-4"></ArrowRightIcon>
              </div>
            </Link>
          </Button>
        </CardFooter>
      </Card>
      <Card className="animate-fadeUp delay-1100 opacity-0">
        <CardHeader>
          <CardTitle className={`${azeretMedium.className} text-3xl`}>
            Design
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className={`${azeretRegular.className} text-text`}>
            I build projects to test out new technologies and automate tasks
            that I think are boring. That’s what coding is for right.
          </p>
          <Image
            src="/design_img.svg"
            width={76}
            height={32}
            alt="Picture of the author"
            className="mt-8 mb-20"
          />
        </CardContent>
        <CardFooter>
          <Button
            variant="linkGreen"
            className={`${azeretRegular.className} text-white p-0`}
          >
            <Link href="/design">
              <div className="flex items-center">
                See Pixels <ArrowRightIcon className="h-4"></ArrowRightIcon>
              </div>
            </Link>
          </Button>
        </CardFooter>
      </Card>
      <Card className="animate-fadeUp delay-1300 opacity-0">
        <CardHeader>
          <CardTitle className={`${azeretMedium.className} text-3xl`}>
            Work & Me
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className={`${azeretRegular.className} text-text`}>
            I build projects to test out new technologies and automate tasks
            that I think are boring. That’s what coding is for right.
          </p>
          <Image
            src="/work_img.svg"
            width={76}
            height={32}
            alt="Picture of the author"
            className="mt-8 mb-20"
          />
        </CardContent>
        <CardFooter>
          <Button
            variant="linkRed"
            className={`${azeretRegular.className} text-white p-0`}
          >
            <Link href="/work">
              <div className="flex items-center">
                My Experiences <ArrowRightIcon className="h-4"></ArrowRightIcon>
              </div>
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardGroup;
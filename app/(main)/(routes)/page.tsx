import { Button } from "@/components/ui/button";
import Image from "next/image";
import Profile from "@/components/ui/profile";
import { Separator } from "@/components/ui/separator";
import CardGroup from "@/components/ui/cards";

const Home = () => {
  return (
    <div className="bg-main text-white min-h-screen">
      <div className="">
        <div className="p-6">
          <Profile />
        </div>
        <Separator className="my-1 animate-fadeIn delay-800 opacity-0" />
        <div className="p-6">
          <CardGroup></CardGroup>
        </div>
      </div>
    </div>
  );
};

export default Home;

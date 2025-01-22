import { Button } from "@/components/ui/button";
import type { FC } from "react";

const Enhance: FC = () => {
  return (
    <div className="mt-[80px]">
      <div className="w-[90%] h-[400px] m-auto bg-black rounded-lg p-12 flex flex-col md:flex-row items-center justify-between text-white">
        <div className="md:w-1/3 space-y-4">
          <p className="text-[#00FF66] text-xl">Categories</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Enhance Your <span className="block">Music Experience</span>
          </h1>
          <div className="flex space-x-4 mt-4">
            <div className="text-center w-16 h-16 rounded-full border-2 border-gray-500 flex flex-col items-center justify-center">
              <p className="text-sm font-bold">05</p>
              <p className="text-sm text-gray-400">Days</p>
            </div>
            <div className="text-center w-16 h-16 rounded-full border-2 border-gray-500 flex flex-col items-center justify-center">
              <p className="text-sm font-bold">59</p>
              <p className="text-sm text-gray-400">Minutes</p>
            </div>
            <div className="text-center w-16 h-16 rounded-full border-2 border-gray-500 flex flex-col items-center justify-center">
              <p className="text-sm font-bold">35</p>
              <p className="text-sm text-gray-400">Seconds</p>
            </div>
          </div>
          <Button
            variant={"ghost"}
            className=" bg-[#00FF66] text-[#FAFAFA] px-6 rounded-sm "
          >
            Buy Now!
          </Button>
        </div>

        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="/images/music_speaker.svg"
            alt="music_speaker"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Enhance;

import type { FC } from "react";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const Flayer: FC = () => {
  return (
    <div className="w-[90%] m-auto mt-8 ">
      <div className="flex gap-4 h-[488px]">
        <div className="w-[287px] rounded-sm flex flex-col gap-2 items-start">
          <Button variant={"link"}>Woman’s Fashion</Button>
          <Button variant={"link"}>Men’s Fashion</Button>
          <Button variant={"link"}>Electronics</Button>
          <Button variant={"link"}>Home & Lifestyle</Button>
          <Button variant={"link"}>Medicine</Button>
          <Button variant={"link"}>Sports & Outdoor</Button>
          <Button variant={"link"}>Baby’s & Toys</Button>
          <Button variant={"link"}>Groceries & Pets</Button>
          <Button variant={"link"}>Health & Beauty</Button>
        </div>
        <div className="w-full rounded-sm flex justify-center">
          <Carousel className="w-[92%] h-[488px]">
            <CarouselContent>
              <CarouselItem>
                <img
                  src="https://s.yimg.com/uu/api/res/1.2/6tptIDiKpIIxEsSAHTrwJw--~B/aD0xMTAyO3c9MTk2MDtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/techcrunch_350/da422d6fcb5de1bb7721c4bd56e8367d"
                  alt="Iphone"
                  className="h-[52%] w-[100%]"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="https://i.ytimg.com/vi/Nt9ndpQ7x4c/maxresdefault.jpg"
                  alt="Samsung"
                  className="h-[52%] w-[100%]"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="https://www.bhphotovideo.com/images/images2500x2500/lg_14z990_u_aaw5u1_gram_i5_8265u_8gb_256ssd_1459832.jpg
"
                  alt="LG"
                  className="h-[52%] w-[100%]"
                />
              </CarouselItem>

              <CarouselItem></CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Flayer;

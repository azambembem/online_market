import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const Header = () => {
  return (
    <div className="flex gap-[180px]">
      <h1 className="text-[28px] font-bold text-black flex items-center">
        Flash Sales
      </h1>
      <div className="flex items-center gap-6">
        <div className="text-center">
          <span className="block text-xs font-bold">Days</span>
          <span className="text-2xl font-bold">03</span>
        </div>
        <div className="text-center">
          <span className="block text-xs font-bold">Hours</span>
          <span className="text-2xl font-bold">23</span>
        </div>
        <div className="text-center">
          <span className="block text-xs font-bold">Minutes</span>
          <span className="text-2xl font-bold">19</span>
        </div>
        <div className="text-center">
          <span className="block text-xs font-bold">Seconds</span>
          <span className="text-2xl font-bold">56</span>
        </div>
      </div>
      <Carousel className="ml-[380px] space-x-16">
        <CarouselContent>
          <CarouselItem></CarouselItem>
          <CarouselItem></CarouselItem>
          <CarouselItem></CarouselItem>
          <CarouselItem></CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Header;

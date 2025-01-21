import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-[28px] font-bold text-black">Explore Our Products</h1>

      <Carousel className="flex space-x-16 mr-24">
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

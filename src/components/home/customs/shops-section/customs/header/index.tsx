import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const Header = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prevTime) => {
        const { days, hours, minutes, seconds } = prevTime;

        // 초가 0이면 분 감소, 분이 0이면 시간 감소, 시간 0이면 일 감소
        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { days, hours, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { days, hours: hours - 1, minutes: 59, seconds: 59 };
        } else if (days > 0) {
          return { days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(countdown); // 시간이 끝났으면 타이머를 정지
          return prevTime;
        }
      });
    }, 1000); // 1초마다 타이머 갱신

    return () => clearInterval(countdown); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  return (
    <div className="flex gap-[180px]">
      <h1 className="text-[28px] font-bold text-black flex items-center">
        Flash Sales
      </h1>
      <div className="flex items-center gap-6">
        <div className="text-center">
          <span className="block text-xs font-bold">Days</span>
          <span className="text-2xl font-bold">{timeLeft.days}</span>
        </div>
        <div className="text-center">
          <span className="block text-xs font-bold">Hours</span>
          <span className="text-2xl font-bold">{timeLeft.hours}</span>
        </div>
        <div className="text-center">
          <span className="block text-xs font-bold">Minutes</span>
          <span className="text-2xl font-bold">{timeLeft.minutes}</span>
        </div>
        <div className="text-center">
          <span className="block text-xs font-bold">Seconds</span>
          <span className="text-2xl font-bold">{timeLeft.seconds}</span>
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

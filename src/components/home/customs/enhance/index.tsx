// import { Button } from "@/components/ui/button";
// import { useEffect, useState, type FC } from "react";

// const Enhance: FC = () => {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 3,
//     hours: 23,
//     minutes: 59,
//     seconds: 59
//   });

//   useEffect(() => {
//     const countdown = setInterval(() => {
//       setTimeLeft((prevTime) => {
//         const { days, hours, minutes, seconds } = prevTime;

//         // 초가 0이면 분 감소, 분이 0이면 시간 감소, 시간 0이면 일 감소
//         if (seconds > 0) {
//           return { ...prevTime, seconds: seconds - 1 };
//         } else if (minutes > 0) {
//           return { days, hours, minutes: minutes - 1, seconds: 59 };
//         } else if (hours > 0) {
//           return { days, hours: hours - 1, minutes: 59, seconds: 59 };
//         } else if (days > 0) {
//           return { days: days - 1, hours: 23, minutes: 59, seconds: 59 };
//         } else {
//           clearInterval(countdown); // 시간이 끝났으면 타이머를 정지
//           return prevTime;
//         }
//       });
//     }, 1000); // 1초마다 타이머 갱신

//     return () => clearInterval(countdown); // 컴포넌트 언마운트 시 타이머 정리
//   }, []);

//   return (
//     <div className="mt-[80px]">
//       <div className="w-[90%] h-[400px] m-auto bg-black rounded-lg p-12 flex flex-col md:flex-row items-center justify-between text-white">
//         <div className="md:w-1/3 space-y-4">
//           <p className="text-[#00FF66] text-xl">Categories</p>
//           <h1 className="text-3xl md:text-4xl font-bold leading-tight">
//             Enhance Your <span className="block">Music Experience</span>
//           </h1>
//           <div className="flex space-x-4 mt-4">
//             <div className="text-center w-16 h-16 rounded-full border-2 border-gray-500 flex flex-col items-center justify-center">
//               <p className="text-sm font-bold">{timeLeft.hours}</p>
//               <p className="text-sm text-gray-400">Hours</p>
//             </div>
//             <div className="text-center w-16 h-16 rounded-full border-2 border-gray-500 flex flex-col items-center justify-center">
//               <p className="text-sm font-bold">{timeLeft.days}</p>
//               <p className="text-sm text-gray-400">Days</p>
//             </div>
//             <div className="text-center w-16 h-16 rounded-full border-2 border-gray-500 flex flex-col items-center justify-center">
//               <p className="text-sm font-bold">{timeLeft.minutes}</p>
//               <p className="text-sm text-gray-400">Minutes</p>
//             </div>
//             <div className="text-center w-16 h-16 rounded-full border-2 border-gray-500 flex flex-col items-center justify-center">
//               <p className="text-sm font-bold">{timeLeft.seconds}</p>
//               <p className="text-sm text-gray-400">Seconds</p>
//             </div>
//           </div>
//           <Button
//             variant={"ghost"}
//             className=" bg-[#00FF66] text-[#FAFAFA] px-6 rounded-sm "
//           >
//             Buy Now!
//           </Button>
//         </div>

//         <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
//           <img
//             src="/images/music_speaker.svg"
//             alt="music_speaker"
//             className="w-full max-w-md"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Enhance;

import { Button } from "@/components/ui/button";
import { useEffect, useState, type FC } from "react";

const Enhance: FC = () => {
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

        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { days, hours, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { days, hours: hours - 1, minutes: 59, seconds: 59 };
        } else if (days > 0) {
          return { days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(countdown);
          return prevTime;
        }
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="mt-[80px]">
      <div className="w-[90%] h-auto md:h-[400px] m-auto bg-black rounded-lg p-12 flex flex-col md:flex-row items-center justify-between text-white">
        <div className="md:w-1/3 space-y-4">
          <p className="text-[#00FF66] text-xl">Categories</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Enhance Your <br className="block md:hidden" />
            Music Experience
          </h1>
          <div className="flex space-x-4 mt-4">
            <div className="text-center w-16 h-16 rounded-full border-2 border-gray-500 flex flex-col items-center justify-center">
              <p className="text-sm font-bold">{timeLeft.hours}</p>
              <p className="text-sm text-gray-400">Hours</p>
            </div>
            <div className="text-center w-16 h-16 rounded-full border-2 border-gray-500 flex flex-col items-center justify-center">
              <p className="text-sm font-bold">{timeLeft.days}</p>
              <p className="text-sm text-gray-400">Days</p>
            </div>
            <div className="text-center w-16 h-16 rounded-full border-2 border-gray-500 flex flex-col items-center justify-center">
              <p className="text-sm font-bold">{timeLeft.minutes}</p>
              <p className="text-sm text-gray-400">Minutes</p>
            </div>
            <div className="text-center w-16 h-16 rounded-full border-2 border-gray-500 flex flex-col items-center justify-center">
              <p className="text-sm font-bold">{timeLeft.seconds}</p>
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

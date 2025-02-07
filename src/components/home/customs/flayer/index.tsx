// import type { FC } from "react";
// import { Button } from "../../../ui/button";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious
// } from "@/components/ui/carousel";
// import { useFlayerFeatures } from "./feature";
// import { Skeleton } from "@/components/ui/skeleton";
// import { v4 } from "uuid";

// const Flayer: FC = () => {
//   const {
//     category: { isLoading, isError, data: category }
//   } = useFlayerFeatures();

//   const loading = isLoading || isError;
//   return (
//     <div className="w-[90%] m-auto mt-8 ">
//       <div className="flex gap-4 h-[450px]">
//         <div className="w-[287px] rounded-sm p-4 flex flex-col gap-2 items-start bg-[#f5f5f5] h-[488px] overflow-auto">
//           {loading
//             ? Array.from({ length: 10 }).map(() => (
//                 <Skeleton className="w-full h-10 bg-[#c1c1c1]" key={v4()} />
//               ))
//             : Array.isArray(category) &&
//               category?.map((categories) => (
//                 <Button key={categories?._id} variant={"link"}>
//                   {categories?.name}
//                 </Button>
//               ))}
//         </div>
//         <div className="w-full rounded-sm flex justify-center">
//           <Carousel className="w-[92%] h-[488px]">
//             <CarouselContent>
//               <CarouselItem>
//                 <img
//                   src="https://s.yimg.com/uu/api/res/1.2/6tptIDiKpIIxEsSAHTrwJw--~B/aD0xMTAyO3c9MTk2MDtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/techcrunch_350/da422d6fcb5de1bb7721c4bd56e8367d"
//                   alt="Iphone"
//                   className="h-[53%] w-[100%]"
//                 />
//               </CarouselItem>
//               <CarouselItem>
//                 <img
//                   src="https://i.ytimg.com/vi/Nt9ndpQ7x4c/maxresdefault.jpg"
//                   alt="Samsung"
//                   className="h-[53%] w-[100%]"
//                 />
//               </CarouselItem>
//               <CarouselItem>
//                 <img
//                   src="https://www.bhphotovideo.com/images/images2500x2500/lg_14z990_u_aaw5u1_gram_i5_8265u_8gb_256ssd_1459832.jpg"
//                   alt="LG"
//                   className="h-[53%] w-[100%]"
//                 />
//               </CarouselItem>

//               <CarouselItem></CarouselItem>
//             </CarouselContent>
//             <CarouselPrevious />
//             <CarouselNext />
//           </Carousel>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Flayer;

import type { FC } from "react";
import { Button } from "../../../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { useFlayerFeatures } from "./feature";
import { Skeleton } from "@/components/ui/skeleton";
import { v4 } from "uuid";

const Flayer: FC = () => {
  const {
    category: { isLoading, isError, data: category }
  } = useFlayerFeatures();

  const loading = isLoading || isError;

  return (
    <div className="w-[90%] m-auto mt-8">
      <div className="flex flex-wrap md:flex-nowrap gap-4 h-auto md:h-[450px]">
        {/* 카테고리 리스트 (작은 화면에서는 숨김) */}
        <div className="hidden sm:block w-full md:w-[287px] rounded-sm p-4 flex-col gap-2 items-start bg-[#f5f5f5] h-[350px] sm:h-[400px] md:h-[488px] overflow-auto">
          {loading
            ? Array.from({ length: 10 }).map(() => (
                <Skeleton className="w-full h-10 bg-[#c1c1c1]" key={v4()} />
              ))
            : Array.isArray(category) &&
              category?.map((categories) => (
                <Button key={categories?._id} variant={"link"}>
                  {categories?.name}
                </Button>
              ))}
        </div>

        {/* 캐러셀 */}
        <div className="w-full flex justify-center">
          <Carousel className="w-[92%] h-[350px] sm:h-[400px] md:h-[488px]">
            <CarouselContent>
              <CarouselItem>
                <img
                  src="https://s.yimg.com/uu/api/res/1.2/6tptIDiKpIIxEsSAHTrwJw--~B/aD0xMTAyO3c9MTk2MDtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/techcrunch_350/da422d6fcb5de1bb7721c4bd56e8367d"
                  alt="Iphone"
                  className="h-full sm:h-[300px] md:h-[41%] w-full object-cover"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="https://i.ytimg.com/vi/Nt9ndpQ7x4c/maxresdefault.jpg"
                  alt="Samsung"
                  className="h-full sm:h-[300px] md:h-[41%] w-full object-cover"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="https://www.bhphotovideo.com/images/images2500x2500/lg_14z990_u_aaw5u1_gram_i5_8265u_8gb_256ssd_1459832.jpg"
                  alt="LG"
                  className="h-full sm:h-[300px] md:h-[41%] w-full object-cover"
                />
              </CarouselItem>
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

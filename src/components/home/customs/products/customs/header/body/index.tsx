// import Card from "./customs/card";
// import { useState } from "react";
// import { TTodays } from "@/types/home";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { Button } from "@/components/ui/button";

// const Body = () => {
//   const [visibleCount, setVisibleCount] = useState(4); // 처음에는 4개만 보이게 설정

//   const productId = "679718ce0fcdfaccb5398ce8";

//   // 데이터를 가져오는 API 요청
//   const {
//     data: most_popular_monthly,
//     isLoading,
//     isError,
//     error
//   } = useQuery({
//     queryKey: ["most-popular-monthly", productId, visibleCount], // visibleCount를 queryKey에 포함
//     queryFn: async () => {
//       const { data } = await axios.get(
//         `${
//           import.meta.env.VITE_APP_BASE_URL
//         }/product/most-popular-monthly?id=${productId}&limit=${visibleCount}`
//       );
//       return data.data;
//     }
//   });

//   const handleViewAll = () => {
//     setVisibleCount((prevCount) => prevCount + 4); // 4개씩 늘리기
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error: {error?.message}</div>;
//   }

//   return (
//     <div className="grid grid-cols-4 gap-2 mt-8">
//       {most_popular_monthly?.map((product: TTodays) => (
//         <Card key={product._id} {...product} />
//       ))}

//       <Button variant={"destructive"} className="w-36 mr-10">
//         View All
//       </Button>
//     </div>
//   );
// };

// export default Body;

// import Card from "./customs/card";
// import { useState } from "react";
// import { TTodays } from "@/types/home";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { Button } from "@/components/ui/button";

// const Body = () => {
//   const [visibleCount, setVisibleCount] = useState(4);

//   const productId = "679718ce0fcdfaccb5398ce8";

//   const {
//     data: most_popular_monthly,
//     isLoading,
//     isError,
//     error
//   } = useQuery({
//     queryKey: ["most-popular-monthly", productId, visibleCount],
//     queryFn: async () => {
//       const { data } = await axios.get(
//         `${
//           import.meta.env.VITE_APP_BASE_URL
//         }/product/most-popular-monthly?id=${productId}&limit=${visibleCount}`
//       );
//       return data.data;
//     }
//   });

//   const handleViewAll = () => {
//     setVisibleCount((prevCount) => prevCount + 4);
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error: {error?.message}</div>;
//   }

//   return (
//     <div>
//       <div className="flex justify-end mb-12 mr-4">
//         <Button variant="destructive" className="w-36" onClick={handleViewAll}>
//           View All
//         </Button>
//       </div>

//       <div className="grid grid-cols-4 gap-2">
//         {most_popular_monthly?.map((product: TTodays) => (
//           <Card key={product._id} {...product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;

// import Card from "./customs/card";
// import { useState } from "react";
// import { TTodays } from "@/types/home";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { Button } from "@/components/ui/button";

// const Body = () => {
//   const [visibleCount, setVisibleCount] = useState(4);

//   const productId = "679718ce0fcdfaccb5398ce8";

//   const {
//     data: most_popular_monthly,
//     isLoading,
//     isError,
//     error
//   } = useQuery({
//     queryKey: ["most-popular-monthly", productId, visibleCount],
//     queryFn: async () => {
//       const { data } = await axios.get(
//         `${
//           import.meta.env.VITE_APP_BASE_URL
//         }/product/most-popular-monthly?id=${productId}&limit=${visibleCount}`
//       );
//       return data.data;
//     }
//   });

//   const handleViewAll = () => {
//     setVisibleCount((prevCount) => prevCount + 4);
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error: {error?.message}</div>;
//   }

//   return (
//     <div className="relative mt-8">
//       <div className="absolute right-14 -top-16">
//         <Button
//           variant="destructive"
//           className="w-36 bg-[#EF4444] hover:bg-[#DC2626]"
//           onClick={handleViewAll}
//         >
//           View All
//         </Button>
//       </div>

//       <div className="grid grid-cols-4 gap-2">
//         {most_popular_monthly?.map((product: TTodays) => (
//           <Card key={product._id} {...product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;

import Card from "./customs/card";
import { useState } from "react";
import { TMonth } from "@/types/home";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Button } from "@/components/ui/button";

const Body = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const productId = "679718ce0fcdfaccb5398ce8";

  const {
    data: most_popular_monthly,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ["most-popular-monthly", productId, visibleCount],
    queryFn: async () => {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_APP_BASE_URL
        }/product/most-popular-monthly?id=${productId}&limit=${visibleCount}`
      );
      return data.data;
    }
  });

  const handleViewAll = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <div className="relative mt-8">
      <div className="absolute right-0 -top-16 sm:right-14">
        <Button
          variant="destructive"
          className="w-36 bg-[#EF4444] hover:bg-[#DC2626]"
          onClick={handleViewAll}
        >
          View All
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {most_popular_monthly?.map((product: TMonth) => (
          <Card key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Body;

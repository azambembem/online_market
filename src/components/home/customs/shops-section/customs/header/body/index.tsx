// import Card from "./customs/card";
// import { TTodays } from "@/types/home";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const Body = () => {
//   const productId = "679718ce0fcdfaccb5398ce8";

//   const {
//     data: most_popular_monthly,
//     isLoading,
//     isError,
//     error
//   } = useQuery({
//     queryKey: ["most-popular-monthly", productId],
//     queryFn: async () => {
//       const { data } = await axios.get(
//         `${
//           import.meta.env.VITE_APP_BASE_URL
//         }/product/most-popular-monthly?id=${productId}`
//       );
//       return data.data;
//     }
//   });

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error: {error?.message}</div>;
//   }

//   return (
//     <div className="grid grid-cols-4 gap-2 mt-8">
//       {most_popular_monthly?.slice(0, 4).map((product: TTodays) => (
//         <Card key={product._id} {...product} />
//       ))}
//     </div>
//   );
// };

// export default Body;

import { useState } from "react";
import { TTodays } from "@/types/home";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Card from "./customs/card";

const Body = () => {
  const [visibleCount, setVisibleCount] = useState(4); // 처음에는 4개만 보이게 설정

  const productId = "679718ce0fcdfaccb5398ce8";

  // 데이터를 가져오는 API 요청
  const {
    data: most_popular,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ["most-popular", productId, visibleCount], // visibleCount를 queryKey에 포함
    queryFn: async () => {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_APP_BASE_URL
        }/product/most-popular?id=${productId}&limit=${visibleCount}`
      );
      return data.data;
    }
  });

  const handleViewAll = () => {
    setVisibleCount((prevCount) => prevCount + 4); // 4개씩 늘리기
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-4 gap-2 mt-8">
        {most_popular?.map((product: TTodays) => (
          <Card key={product._id} {...product} />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={handleViewAll}
          className="w-[200px] bg-red-500 text-white py-2 rounded"
        >
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Body;

import { useState } from "react";
import { TExplore } from "@/types/home";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Card from "./customs/card";
import { Button } from "@/components/ui/button";

const Body = () => {
  const [visibleCount, setVisibleCount] = useState(4); // 처음에는 4개만 보이게 설정

  const productId = "679718ce0fcdfaccb5398ce8";

  // 데이터를 가져오는 API 요청
  const {
    data: get_product,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ["/", productId, visibleCount], // visibleCount를 queryKey에 포함
    queryFn: async () => {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_APP_BASE_URL
        }/product/?id=${productId}&limit=${visibleCount}`
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-8">
        {get_product?.map((product: TExplore) => (
          <Card key={product._id} {...product} />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <Button
          onClick={handleViewAll}
          className="w-[200px] bg-red-500 text-white py-2 rounded cursor-pointer"
        >
          View All Products
        </Button>
      </div>
    </div>
  );
};

export default Body;

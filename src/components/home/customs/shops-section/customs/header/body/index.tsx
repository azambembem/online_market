import Card from "./customs/card";
import { TTodays } from "@/types/home";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Body = () => {
  const productId = "679718ce0fcdfaccb5398ce8";

  const {
    data: most_popular_monthly,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ["most-popular-monthly", productId],
    queryFn: async () => {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_APP_BASE_URL
        }/product/most-popular-monthly?id=${productId}`
      );
      return data.data;
    }
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <div className="grid grid-cols-4 gap-2 mt-8">
      {most_popular_monthly?.slice(0, 4).map((product: TTodays) => (
        <Card key={product._id} {...product} />
      ))}
    </div>
  );
};

export default Body;

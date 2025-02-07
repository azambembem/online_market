import { TTodays } from "@/types/home";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import Card from "./customs/card";

const Body = () => {
  const productId = "679718ce0fcdfaccb5398ce8";

  const {
    data: most_popular,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ["most-popular", productId],
    queryFn: async () => {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_APP_BASE_URL
        }/product/most-popular?id=${productId}`
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
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-8">
        {most_popular?.map((product: TTodays) => (
          <Card key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Body;

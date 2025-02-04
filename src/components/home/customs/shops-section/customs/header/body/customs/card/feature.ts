import type { TTodays } from "@/types/home";
import { type UseQueryResult, useQuery } from "@tanstack/react-query";
import axios from "axios";

type useCardFeatures = {
    most_popular: UseQueryResult<TTodays[] | null, Error>; 
};

export const useCardFeatures = (): useCardFeatures => {
  const most_popular = useQuery<TTodays[], Error>({
    queryKey: ["most-popular"],
    queryFn: async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/product/most-popular`);
  return data.data;
    },
  });


  return {
    most_popular
  };
};

import type { TTodays } from "@/types/home";
import { type UseQueryResult, useQuery } from "@tanstack/react-query";
import axios from "axios";

type useCardFeatures = {
    most_popular_monthly: UseQueryResult<TTodays[] | null, Error>; 
};

export const useCardFeatures = (): useCardFeatures => {
  const most_popular_monthly = useQuery<TTodays[], Error>({
    queryKey: ["most-popular-monthly"],
    queryFn: async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/product/most-popular-monthly`);
  return data.data;
    },
  });


  return {
    most_popular_monthly
  };
};

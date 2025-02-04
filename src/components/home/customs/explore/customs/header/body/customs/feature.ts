import type { TExplore } from "@/types/home";
import { type UseQueryResult, useQuery } from "@tanstack/react-query";
import axios from "axios";

type useCardFeatures = {
    get_product: UseQueryResult<TExplore[] | null, Error>; 
};

export const useCardFeatures = (): useCardFeatures => {
  const get_product = useQuery<TExplore[], Error>({
    queryKey: ["/"],
    queryFn: async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/product/`);
  return data.data;
    },
  });


  return {
    get_product
  };
};

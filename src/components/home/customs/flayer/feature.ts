import type { TCategory } from "@/types/home";
import {type UseQueryResult, useQuery } from "@tanstack/react-query";
import axios from "axios";

type FlayerFeatures = {
    category: UseQueryResult<TCategory[] | null, Error>;
};

export const useFlayerFeatures = (): FlayerFeatures => {
    const category = useQuery<TCategory[], Error>({
        queryKey: ["category"],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/category`);
            return data.data;
        },
    });

    return {
        category,
    };
};

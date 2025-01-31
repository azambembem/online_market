// import axios from "axios";

// import {type UseQueryResult, useQuery } from "@tanstack/react-query";
// import type { TGenre } from "@/types/home";

// type FlayerFeatures = {
// 	genres: UseQueryResult<TGenre[] | null, Error>;
// };


// export const useFlayerFeatures = (): FlayerFeatures => {
// 	const genres = useQuery({
// 		queryKey: ["genres"],
// 		queryFn: async () => {
// 			const { data } = await axios({
// 				url: "https://book-uz-backend.onrender.com/api/genres",
// 			});
// 			return data.data;
// 		},
// 	});


// 	return {
//         genres,
//     }
// };


import axios from "axios";
import {UseQueryResult, useQuery } from "@tanstack/react-query";
import type { TGenre } from "@/types/home";

type FlayerFeatures = {
    genres: UseQueryResult<TGenre[] | null, Error>;
};

export const useFlayerFeatures = (): FlayerFeatures => {
    const genres = useQuery<TGenre[], Error>({
        queryKey: ["category"],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/category`);
            return data; // Assuming data is directly the array of genres
        },
    });

    return {
        genres,
    };
};

import { useQuery } from "@tanstack/react-query";
import apiClient, { type FetchReponse } from "../services/api-client";
import { genres } from "../data/genres";
export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

function useGenres() {
    return useQuery<FetchReponse<Genre>, Error>({
        queryKey: ['genres'],
        queryFn: () => {
            return apiClient
                .get<FetchReponse<Genre>>('/genres')
                .then(res => res.data)
        },
        staleTime: 24 * 60 * 60 * 1000, //1 day,
        initialData: { count: genres.length, results: genres }
    })
}

export default useGenres
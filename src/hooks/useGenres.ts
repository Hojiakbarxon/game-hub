import { useQuery } from "@tanstack/react-query";
import { type FetchReponse } from "../services/api-client";
import { APIClient } from "../services/api-client";
import { genres } from "../data/genres";

let apiClient = new APIClient<Genre>('genres');

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

function useGenres() {
    return useQuery<FetchReponse<Genre>, Error>({
        queryKey: ['genres'],
        queryFn: apiClient.getAllData,
        staleTime: 24 * 60 * 60 * 1000, //1 day,
        initialData: genres
    })
}

export default useGenres
import { useQuery } from "@tanstack/react-query";
import { type FetchReponse, APIClient } from "../services/api-client";
import { genres } from "../data/genres";
import ms from 'ms'
import type { Genre } from "../entities/Genre";

let apiClient = new APIClient<Genre>('genres');

function useGenres() {
    return useQuery<FetchReponse<Genre>, Error>({
        queryKey: ['genres'],
        queryFn: apiClient.getAllData,
        staleTime: ms('1d'),
        initialData: genres
    })
}

export default useGenres
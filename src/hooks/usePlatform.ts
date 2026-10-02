import { useQuery } from "@tanstack/react-query";
import { platforms } from "../data/platforms";
import apiClient from "../services/api-client";
import type { FetchReponse } from "./useData";
import type { Platform } from "./useGames";



function usePlatform() {
    return useQuery<FetchReponse<Platform>, Error>({
        queryKey: ['platforms'],
        queryFn: () => {
            return apiClient
                .get<FetchReponse<Platform>>('platforms/lists/parents')
                .then(res => res.data)
        },
        staleTime: 24 * 60 * 60 * 1000,//1d,
        initialData: { results: platforms, count: platforms.length }
    })
}

export default usePlatform;
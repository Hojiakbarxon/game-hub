import { useQuery } from "@tanstack/react-query";
import { platforms } from "../data/platforms";
import apiClient, { type FetchReponse } from "../services/api-client";


export interface Platform {
    id: number;
    slug: string;
    name: string;
}

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
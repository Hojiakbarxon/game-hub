import { useQuery } from "@tanstack/react-query";
import { platforms } from "../data/platforms";
import { APIClient, type FetchReponse } from "../services/api-client";

let apiClient = new APIClient<Platform>('platforms/lists/parents');

export interface Platform {
    id: number;
    slug: string;
    name: string;
}

function usePlatforms() {
    return useQuery<FetchReponse<Platform>, Error>({
        queryKey: ['platforms'],
        queryFn: apiClient.getAllData,
        staleTime: 24 * 60 * 60 * 1000,//1d,
        initialData: platforms
    })
}

export default usePlatforms;
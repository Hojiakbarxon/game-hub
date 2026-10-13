import { useQuery } from "@tanstack/react-query";
import { platforms } from "../data/platforms";
import { APIClient, type FetchReponse } from "../services/api-client";
import ms from "ms";
import type Platform from "../entities/Platform";

let apiClient = new APIClient<Platform>('platforms/lists/parents');

function usePlatforms() {
    return useQuery<FetchReponse<Platform>, Error>({
        queryKey: ['platforms'],
        queryFn: apiClient.getAllData,
        staleTime: ms('1d'),
        initialData: platforms
    })
}

export default usePlatforms;
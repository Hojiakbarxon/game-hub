import apiClient from "../services/api-client";
import type { FetchReponse } from "../services/api-client";
import type { GameQuery } from "../App";
import { useQuery } from "@tanstack/react-query";
import type { Platform } from "./usePlatform";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[]
    metacritic: number;
    rating_top: number
}



function useGames(gameQuery: GameQuery) {
    return useQuery<FetchReponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: () => {
            return apiClient.get<FetchReponse<Game>>("games", {
                params: {
                    genres: gameQuery.genre?.id,
                    parent_platforms: gameQuery.platform?.id,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText
                }
            }).then(res => res.data)
        },
        staleTime: 24 * 60 * 60 * 1000, //1d
    });
}

export default useGames
import { APIClient } from "../services/api-client";
import type { FetchReponse } from "../services/api-client";
import type { GameQuery } from "../App";
import { useQuery } from "@tanstack/react-query";
import type { Platform } from "./usePlatform";

let apiClient = new APIClient<Game>('games');

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
            return apiClient.getAllData({
                params: {
                    genres: gameQuery.genre?.id,
                    parent_platforms: gameQuery.platform?.id,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText
                }
            })
        },
        staleTime: 24 * 60 * 60 * 1000, //1d
    });
}

export default useGames
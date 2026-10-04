import { APIClient } from "../services/api-client";
import type { FetchReponse } from "../services/api-client";
import type { GameQuery } from "../App";
import { useInfiniteQuery } from "@tanstack/react-query";
import type { Platform } from "./usePlatforms";

let apiClient = new APIClient<Game>('games');

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}



function useGames(gameQuery: GameQuery) {
    return useInfiniteQuery<FetchReponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        initialPageParam: 1,
        queryFn: ({ pageParam }) => {
            return apiClient.getAllData({
                params: {
                    genres: gameQuery.genreId,
                    parent_platforms: gameQuery.platformId,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                    page: pageParam
                }
            })
        },
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
        staleTime: 24 * 60 * 60 * 1000, //1d
    });
}

export default useGames
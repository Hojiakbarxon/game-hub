import { APIClient, type FetchReponse } from "../services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import useGameQueryStore from "../store";
import type { Game } from "../entities/Game";

let apiClient = new APIClient<Game>('games');

function useGames() {
    let gameQuery = useGameQueryStore(s => s.gameQuery);
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
        staleTime: ms('1d')
    });
}

export default useGames
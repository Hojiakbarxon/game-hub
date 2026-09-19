import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import type { Genre } from "./useGenre";
import type { GameQuery } from "../App";

export interface Platform {
    id: number;
    slug: string;
    name: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[]
    metacritic: number;
    rating_top : number
}



function useGames(gameQuery: GameQuery) {
    return useData<Game>('/games', {
        params: {
            genres: gameQuery.genre?.id,
            platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText
        }
    }, [
        gameQuery.genre?.id,
        gameQuery.platform?.id,
        gameQuery.sortOrder,
        gameQuery.searchText
    ]
    )
}

export default useGames
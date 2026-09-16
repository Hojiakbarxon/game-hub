import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import type { Genre } from "./useGenre";

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
}



function useGames(selectedGenre: Genre | null, selectedPlatform: Platform | null) {
    return useData<Game>('/games', { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } }, [selectedGenre?.id, selectedPlatform?.id])
}

export default useGames
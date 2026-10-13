import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";
import type { Trailer } from "../entities/Trailer";


function useTrailer(gameId: number) {
    const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`)
    return useQuery({
        queryKey: ['trailers', gameId],
        queryFn: () => apiClient.getAllData()
    });
};

export default useTrailer;
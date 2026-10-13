import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";
import type Screenshot from "../entities/Screenshot";

function useScreenshots(gameId: number) {
    const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`)
    return useQuery({
        queryKey: ['images', gameId],
        queryFn: () => apiClient.getAllData()
    });
};

export default useScreenshots;
import useData from "./useData";
import type { Platform } from "./useGames";



function usePlatform() {
    return useData<Platform>('/platforms/lists/parents')
}

export default usePlatform;
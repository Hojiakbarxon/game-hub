import type Platform from "../entities/Platform";
import usePlatforms from "./usePlatforms";

function usePlatform(id?: number): Platform | null {
    let { data: platforms } = usePlatforms();
    let platform = platforms?.results.find(p => p.id === id);

    return platform || null;
};

export default usePlatform;
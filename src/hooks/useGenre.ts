import type { Genre } from "./useGenres";
import useGenres from "./useGenres";

function useGenre(id?: number): Genre | null {
    let { data: genres } = useGenres();
    let genre = genres?.results.find(g => g.id === id);

    return genre || null
};

export default useGenre;
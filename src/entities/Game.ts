import type Genre from "./Genre";
import type Platform from "./Platform";
import type Publisher from "./Publisher";

export default interface Game {
    id: number;
    name: string;
    genres: Genre[];
    publishers: Publisher[];
    background_image: string;
    parent_platforms: { platform: Platform; }[];
    metacritic: number;
    rating_top: number;
    slug: string;
    description_raw: string;
}

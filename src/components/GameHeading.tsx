import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../App";
import usePlatform from "../hooks/usePlatform";
import useGenres from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}
function GameHeading({ gameQuery }: Props) {
  let { data: platforms } = usePlatform();
  let { data: genres } = useGenres();

  let platform = platforms.results.find(p => p.id === gameQuery.platformId);

  let genre = genres.results.find((g) => g.id === gameQuery.genreId);

  const heading = `${platform?.name ?? ""} ${genre?.name ?? ""} Games`;
  
  return (
    <Heading marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
}

export default GameHeading;

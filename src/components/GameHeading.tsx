import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../App";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}
function GameHeading({ gameQuery }: Props) {
  let platform = usePlatform(gameQuery.platformId);

  let genre = useGenre(gameQuery.genreId);

  const heading = `${platform?.name ?? ""} ${genre?.name ?? ""} Games`;

  return (
    <Heading marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
}

export default GameHeading;

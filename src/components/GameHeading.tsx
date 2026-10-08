import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";

function GameHeading() {
  let platformId = useGameQueryStore(s => s.gameQuery.platformId);
  let platform = usePlatform(platformId);
  
  let genreId = useGameQueryStore(s => s.gameQuery.genreId);
  let genre = useGenre(genreId);

  const heading = `${platform?.name ?? ""} ${genre?.name ?? ""} Games`;

  return (
    <Heading marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
}

export default GameHeading;

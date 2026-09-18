import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { type Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { Genre } from "../hooks/useGenre";
import type { GameQuery } from "../App";

interface Props {
  gameQuery : GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
  let { data, error, isLoading } = useGames(gameQuery);
  let skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {data.map((g) => (
          <GameCardContainer key={g.id}>
            <GameCard game={g} key={g.id} />
          </GameCardContainer>
        ))}
        {data.length === 0 && <Text>No games found for this platform</Text>}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

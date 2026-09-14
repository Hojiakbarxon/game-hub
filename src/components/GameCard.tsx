import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

function GameCard(props: Props) {
  let { game } = props;
  return (
    <Card borderRadius={10}>
      <Image src={game.background_image}  overflow='hidden' />
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
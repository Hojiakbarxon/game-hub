import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
interface Props {
  game: Game;
}

function GameCard(props: Props) {
  let { game } = props;
  return (
    <Card borderRadius={10}>
      <Image src={game.background_image} overflow="hidden" />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((item) => item.platform)}
        />
      </CardBody>
    </Card>
  );
}

export default GameCard;

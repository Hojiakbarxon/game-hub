import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import image from "../assets/no-image-placeholder-6f3882e0.webp";
import Emoji from "./Emoji";
interface Props {
  game: Game;
}

function GameCard(props: Props) {
  let { game } = props;
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={5}>
          <PlatformIconList
            platforms={game.parent_platforms.map((item) => item.platform)}
          />
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
}

export default GameCard;

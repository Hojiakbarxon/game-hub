import { SimpleGrid, Spinner } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";
interface Props {
  gameId: number;
}
function GameScreenshots({ gameId }: Props) {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (error) throw error;
  if (isLoading) return <Spinner />;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        {data?.results.map((file) => (
          <Image key={file.id} src={file.image} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameScreenshots;

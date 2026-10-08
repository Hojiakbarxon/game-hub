import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

function GenreList() {
  const { data, error, isLoading } = useGenres();
  let selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  let setGenreId = useGameQueryStore((s) => s.setGenreId);
  return (
    <>
      <Heading marginBottom={5}>Genres</Heading>
      <List>
        {isLoading && <Spinner />}
        {error && null}
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit={"cover"}
              />
              <Button
                variant={"link"}
                fontSize="lg"
                whiteSpace={"normal"}
                textAlign={"left"}
                onClick={() => setGenreId(genre.id)}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;

import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string | null;
  searchText: string | null;
}

function App() {
  let [gameQuery, setGameQuery] = useState<GameQuery>({
    sortOrder: null,
    searchText: null,
  });

  function onSelectGenre(genre: Genre) {
    setGameQuery({ ...gameQuery, genreId: genre.id });
  }

  function onSelectPlatform(platform: Platform) {
    setGameQuery({ ...gameQuery, platformId: platform.id });
  }

  function onSelectSortOrder(sortOrder: string) {
    setGameQuery({ ...gameQuery, sortOrder });
  }

  function onSearch(searchText: string) {
    setGameQuery({ ...gameQuery, searchText });
  }

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      paddingX={5}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={onSearch}
          onSelectGenre={onSelectGenre}
          selectedGenreId={gameQuery.genreId}
        />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside">
          <GenreList
            onSelectGenre={onSelectGenre}
            selectedGenreId={gameQuery?.genreId}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                onSelectPlatform={onSelectPlatform}
                selectedPlatformId={gameQuery.platformId}
              />
            </Box>
            <SortSelector
              onSelectSortOrder={onSelectSortOrder}
              sortOrder={gameQuery?.sortOrder}
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;

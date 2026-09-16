import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/useGames";

function App() {
  let [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  let [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  function onSelectGenre(genre: Genre) {
    setSelectedGenre(genre);
  }

  function onSelectPlatform(platform: Platform) {
    setSelectedPlatform(platform);
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
        <NavBar></NavBar>
      </GridItem>

      <Show above="lg">
        <GridItem area="aside">
          <GenreList
            onSelectGenre={onSelectGenre}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <PlatformSelector
          onSelectPlatform={onSelectPlatform}
          selectedPlatform={selectedPlatform}
        />
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
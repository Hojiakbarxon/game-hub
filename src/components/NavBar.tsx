import {
  HStack,
  Image,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Show,
} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import GenreList from "./GenreList";
import type { Genre } from "../hooks/useGenres";

interface Props {
  onSearch: (searchText: string) => void;
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const NavBar = ({ onSearch, onSelectGenre, selectedGenreId }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack paddingY="10px">
        <Image
          src={logo}
          boxSize="60px"
          objectFit="contain"
          cursor="pointer"
          onClick={onOpen}
        />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Genres</DrawerHeader>
          <DrawerBody>
            <GenreList
              onSelectGenre={(genre) => {
                onSelectGenre(genre);
                onClose();
              }}
              selectedGenreId={selectedGenreId}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavBar;

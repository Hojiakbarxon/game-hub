import { HStack, Icon } from "@chakra-ui/react";
import type { Platform } from "../hooks/useGames";
import type { IconType } from "react-icons/lib";
import {
  FaAndroid,
  FaApple,
  FaEye,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";

interface Props {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: FaEye,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <>
      <HStack marginY={'10px'}>
        {platforms.map((item) => (
          <Icon as={iconMap[item.slug]} color="gray.500"></Icon>
        ))}
      </HStack>
    </>
  );
}

export default PlatformIconList;

import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Button, Heading, HStack, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import ExpandableText from "../components/ExpandableText";

function GameDetailPage() {
  let [isLess, setLess] = useState(false);
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExpandableText children={game?.description_raw!}></ExpandableText>
    </>
  );
}

export default GameDetailPage;

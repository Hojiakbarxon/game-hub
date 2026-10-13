import useTrailer from "../hooks/useTrailers";

interface Props {
  gameId: number;
}
function GameTrailer({ gameId }: Props) {
  const { data: trailers, isLoading, error } = useTrailer(gameId);

  if (isLoading) return null;

  if (error) throw error;
  let first = trailers?.results[0];

  return first ? (
    <video poster={first.preview} controls src={first.data[480]}></video>
  ) : null;
}

export default GameTrailer;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details/json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <h1>{movie.title}</h1>
      <img src={movie.medium_cover_image} alt="movie" />
    </>
  );
}

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Movie({ movie }) {
  return (
    <article key={movie.id}>
      <img src={movie.medium_cover_image} alt={movie.title} />
      <Link to={`/movie/${movie.id}`}>
        <h2>{movie.title}</h2>
      </Link>
      <p>{movie.summary}</p>
      <ul>
        {movie.genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </article>
  );
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};

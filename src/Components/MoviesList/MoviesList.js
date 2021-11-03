import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

export default function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link
            to={{
              pathname: `movies/${movie.id}`,
              state: {
                from: {
                  location,
                },
              },
            }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchGetMovieCredits } from "../../serv/moviesApi.js";
import NotFoundActor from "../../img/person.png";

export default function CastView({ movieId }) {
  const [castList, setCastList] = useState(null);

  useEffect(() => {
    fetchGetMovieCredits(movieId).then((data) => {
      setCastList(data.cast);
    });
  }, [movieId]);

  return (
    castList && (
      <ul>
        {castList.map((actor) => (
          <li key={actor.id}>
              {actor.profile_path ?
           ( <img
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt={actor.name}
              width="100"
              height="150"
            ></img>) : (
             <img
              src={NotFoundActor}
              alt="not found"
              width="100"
              height="150"
            ></img>
            )}
            <h3>{actor.name}</h3>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    )
  );
}

CastView.propTypes = {
  movieId: PropTypes.string.isRequired,
};
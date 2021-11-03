// import { useState } from "react";
// import PropTypes from "prop-types";
// import s from "./MoviesPage.module.css";


// function MoviesPage ({onSubmit}) {
//     const [searchQuery, setSearchQuery] = useState("");

//     const handleInputChange = (e) => {
//       setSearchQuery(e.target.value.toLowerCase());
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
  
//       if (searchQuery.trim() === "") {
//         alert("Please add search query");
//         return;
//       }

//       onSubmit(searchQuery);
//     };
//     return (
//     <form onSubmit={handleSubmit} className={s.movieForm}>
//         <label>
//             <input
//                 type="text"
//                 autoComplete="off"
//                 autoFocus
//                 placeholder="Search movie"
//                 onChange={handleInputChange}
//                 value={searchQuery}
//                 className={s.movieSearch}
//             ></input>
//         </label>
//         <button type="submit" className={s.movieButton}>
//             Search
//         </button>
//     </form >
//     )
// }

// MoviesPage.propTypes = {
//     value: PropTypes.string,
//     handleSubmit: PropTypes.func,
//     handleInputChange: PropTypes.func,
//     onSubmit: PropTypes.func.isRequired,
// };

// export default MoviesPage;










import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

import Searchbar from "../../Components/Search/SearchBar";
import MoviesList from "../../Components/MoviesList/MoviesList";
import { fetchSearchMovies } from "../../serv/moviesApi";

export default function Movies() {
  const [movies, setMovies] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();
  const location = useLocation();

  const searchURL = new URLSearchParams(location.search).get("query") ?? "";

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    fetchSearchMovies(searchQuery)
      .then((data) => {
        if (!data.results.length) {
          alert("No result:(  try again");
          return;
        }
        setMovies(data.results);
      })
      .catch((error) => alert("Smth went wrong:( please try again"));
  }, [searchQuery]);

  useEffect(() => {
    if (searchURL === "") {
      return;
    }
    setSearchQuery(searchURL);
  }, [searchURL]);

  const setHistory = (searchQuery) => {
    history.push({
      ...location,
      search: `query=${searchQuery}`,
    });
  };

  const onSubmit = (searchQuery) => {
    setSearchQuery(searchQuery);
    setHistory(searchQuery);
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      {movies && <MoviesList movies={movies} />}
    </>
  );
}
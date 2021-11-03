import { useState } from "react";
import PropTypes from "prop-types";
import s from "./MoviesPage.module.css";


function MoviesPage ({ onSubmit }) {
    
    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = (event) => {
      setSearchQuery(event.target.value.toLowerCase());
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (searchQuery.trim() === "") {
        alert("Please add search query");
        return;
      }
onSubmit(searchQuery);
    };

    return (
    <form onSubmit={handleSubmit} className={s.movieForm}>
        <label>
            <input
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search movie"
                onChange={handleInputChange}
                value={searchQuery}
                className={s.movieSearch}>
            </input>
        </label>
        <button type="submit" className={s.movieButton}>
            Search
        </button>
    </form >
    )
}


MoviesPage.propTypes = {
    value: PropTypes.string,
    handleSubmit: PropTypes.func,
    handleInputChange: PropTypes.func,
    onSubmit: PropTypes.func.isRequired
};

export default MoviesPage;
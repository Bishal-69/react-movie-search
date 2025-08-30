import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovies, getPopularMovies } from "../Services/api";

function Home() {
  const [searchquery, Setsearchquery] = useState("");
  const [movies, setMovies] = useState([]);

  const handlesearch = (e) => {
    e.preventDefault();
    alert(searchquery);
  }; // for the onsubmit seach function

  return (
    <>
      <form onSubmit={handlesearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movie"
          className="search-input"
          value={searchquery}
          onChange={(e) => Setsearchquery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="home">
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;

import { useState } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
  const [searchquery, Setsearchquery] = useState("");

  const movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 2, title: "Terminator", release_date: "2020" },
    { id: 3, title: "The matrix", release_date: "2020" },
  ];

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

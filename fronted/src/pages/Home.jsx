import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../Services/api";

function Home() {
  const [searchquery, Setsearchquery] = useState("");
  const [movies, setMovies] = useState([]); // list movies
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // we set this true cuz when we load this component(useffect) , we're going to be running this use effect

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load Movies");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handlesearch = async (e) => {
    e.preventDefault();
    if (!searchquery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchquery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movie...");
    } finally {
      setLoading(false);
    }
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

      {error && <div className="error-message">{error}</div>}

      {loading ? ( // ternary operation rule
        <div className="loading">Loading...</div>
      ) : (
        <div className="home">
          <div className="movies-grid">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Home;

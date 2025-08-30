import "../css/moviecard.css";

function MovieCard({ movie }) {
  function onFavoriteClick() {}

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <image src={movie.url} alt={movie.title}></image>

        <div className="movie-overlay">
          <button className="favourite-btn" onClick={onFavoriteClick}>
            ❤️
          </button>
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p> {movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;

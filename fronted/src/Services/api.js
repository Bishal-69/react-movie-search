const API_KEY = "4614a16769e0e1c1bfac24f37a609171";
const Base_URl = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${Base_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${Base_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};


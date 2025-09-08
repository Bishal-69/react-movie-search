import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setfavorites] = useState([]);

  useEffect(() => {
    const storeFavs = localStorage.getItem("favorites");

    if (storeFavs) {
      setfavorites(JSON.parse(storeFavs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie) => {
    setfavorites((prev) => [...prev, movie]); // [purano array (1,2,3,...6), new arrya(7)]   together [1,2,3,4,5,6,7]
  };

  const removeFromFavorites = (movieId) => {
    setfavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

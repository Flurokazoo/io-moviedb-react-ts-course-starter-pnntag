import { IMovie } from '../model/movie';
import React, { useState, useContext, PropsWithChildren } from 'react';

interface FavoritesContextProps {
  favorites: IMovie[];
  addFavoritesEntry: (movie: IMovie) => void;
  deleteFavoritesEntry: (id: string) => void;
  updateFavoritesEntry: (movie: IMovie) => void;
  isFavorite: (id: string) => boolean;
  toggleFavoritesEntry: (movie: IMovie) => void;
}
export const FavoritesContext = React.createContext<FavoritesContextProps>(
  {} as FavoritesContextProps
);

export const FavoritesProvider = (children: PropsWithChildren<{}>) => {
  const [favorites, setFavorites] = useState<IMovie[]>([]);

  const addFavoritesEntry = (movie: IMovie) =>
    setFavorites([...favorites, movie]);

  const deleteFavoritesEntry = (id: string) =>
    setFavorites(favorites.filter((favorite) => favorite.imdbID !== id));

  const updateFavoritesEntry = (movie: IMovie) =>
    setFavorites(
      favorites.map((favorite) =>
        favorite.imdbID === movie.imdbID ? movie : favorite
      )
    );

  const isFavorite = (id: string) =>
    favorites.find((favorite) => favorite.imdbID === id) ? true : false;

  const toggleFavoritesEntry = (movie: IMovie) =>
    isFavorite(movie.imdbID)
      ? deleteFavoritesEntry(movie.imdbID)
      : addFavoritesEntry(movie);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavoritesEntry,
        deleteFavoritesEntry,
        updateFavoritesEntry,
        isFavorite,
        toggleFavoritesEntry,
      }}
      {...children}
    />
  );
};

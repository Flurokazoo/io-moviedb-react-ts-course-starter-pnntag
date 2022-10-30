import { IMovie } from '../model/movie';
import React, { useState, useContext, PropsWithChildren } from 'react';

interface FavoritesContextProps {
  favorites: IMovie[];
  addFavoritesEntry: (movie: IMovie) => void;
  deleteFavoritesEntry: (id: string) => void;
  updateFavoritesEntry: (movie: IMovie) => void;
  toggleFavoritesEntry: (movie: IMovie) => void;
  findFavorite: (id: string) => IMovie | undefined;
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

  const findFavorite = (id: string) =>
    favorites.find((favorite) => favorite.imdbID === id);

  const toggleFavoritesEntry = (movie: IMovie) =>
    findFavorite(movie.imdbID)
      ? deleteFavoritesEntry(movie.imdbID)
      : addFavoritesEntry(movie);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavoritesEntry,
        deleteFavoritesEntry,
        updateFavoritesEntry,
        toggleFavoritesEntry,
        findFavorite,
      }}
      {...children}
    />
  );
};

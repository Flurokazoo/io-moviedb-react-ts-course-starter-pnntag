import { IMovie } from '../model/movie';
import React, { useState, useContext, PropsWithChildren } from 'react';

interface FavoritesContextProps {
  favorites: IMovie[];
  addFavoritesEntry: (id: number) => void;
  removeFavoritesEntry: (id: number) => void;
  updateFavoritesEntry: (movie: IMovie) => void;
}
export const FavoritesContext = React.createContext<FavoritesContextProps>(
  {} as FavoritesContextProps
);

export const FavoritesProvider = (children: PropsWithChildren<{}>) => {
  const [favorites, setFavorites] = useState<IMovie[]>([]);

  const addFavoritesEntry = (id: number) => {};

  const removeFavoritesEntry = (id: number) => {};

  const updateFavoritesEntry = (movie: IMovie) => {};

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavoritesEntry,
        removeFavoritesEntry,
        updateFavoritesEntry,
      }}
      {...children}
    />
  );
};

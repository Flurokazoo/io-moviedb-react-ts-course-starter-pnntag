import { IMovie } from '../model/movie';
import React, { useState, useContext, PropsWithChildren } from 'react';

interface FavoritesContextProps {
  favorites: IMovie[];
  addFavoritesEntry: (id: string) => void;
  removeFavoritesEntry: (id: string) => void;
  updateFavoritesEntry: (movie: IMovie) => void;
  isFavorite: (id: string) => boolean;
}
export const FavoritesContext = React.createContext<FavoritesContextProps>(
  {} as FavoritesContextProps
);

export const FavoritesProvider = (children: PropsWithChildren<{}>) => {
  const [favorites, setFavorites] = useState<IMovie[]>([]);

  const addFavoritesEntry = (id: string) => {};

  const removeFavoritesEntry = (id: string) => {};

  const updateFavoritesEntry = (movie: IMovie) => {};

  const isFavorite = (id: string) => favorites.find((favorite) => favorite.imdbID === id ? true : false )
   
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavoritesEntry,
        removeFavoritesEntry,
        updateFavoritesEntry,
        isFavorite,
      }}
      {...children}
    />
  );
};

import { createContext } from 'react';
import { IMovie } from '../model/movie';

export const FavoritesContext = createContext<IMovie[]>([]);

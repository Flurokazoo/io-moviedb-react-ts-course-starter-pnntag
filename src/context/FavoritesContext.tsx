import { IMovie } from '../model/movie';
import React, { useState, useContext, PropsWithChildren } from 'react';

export const FavoritesContext = React.createContext<IMovie[]>([]);

export function FavoritesProvider(props: PropsWithChildren<{}>) {
  
}

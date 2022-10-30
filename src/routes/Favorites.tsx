import { FunctionComponent, useContext } from 'react';
import FavoritesCard from '../components/FavoritesCard';
import { FavoritesContext } from '../context/FavoritesContext';

const Favorites: FunctionComponent = () => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {favorites.map((favorite) => (
        <FavoritesCard movie={favorite} />
      ))}
    </ul>
  );
};

export default Favorites;

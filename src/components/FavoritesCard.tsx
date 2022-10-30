import { FunctionComponent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FavoritesContext } from '../context/FavoritesContext';
import { IMovie } from '../model/movie';

interface IFavoritesCardProps {
  movie: IMovie;
}

const FavoritesCard: FunctionComponent<IFavoritesCardProps> = ({ movie }) => {
  const navigate = useNavigate();
  const { deleteFavoritesEntry } = useContext(FavoritesContext);

  const handleEditClick = () => navigate(`/edit/${movie.imdbID}`);
  const handleDeleteClick = () => deleteFavoritesEntry(movie.imdbID);

  return (
    <li
      className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
      key={movie.imdbID}
    >
      <div className="flex-1 flex flex-col">
        <img className="h-48 mx-auto mt-4" src={movie.Poster} loading="lazy" />
        <div className="p-4">
          <h3 className="mt-6 text-gray-900 text-sm font-medium">
            {movie.Title}
          </h3>
          <dl className="mt-1 flex-grow flex flex-col justify-between">
            <dd className="text-gray-500 text-sm">{movie.Year}</dd>
          </dl>
          <button
            onClick={handleEditClick}
            className="m-2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          >
            Edit
          </button>
          <button
            onClick={handleDeleteClick}
            className="m-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default FavoritesCard;

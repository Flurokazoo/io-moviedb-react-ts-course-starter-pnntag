import { FunctionComponent } from 'react';
import { IMovie } from '../model/movie';

interface IMovieCardProps {
  movie: IMovie;
}

const MovieCard: FunctionComponent<IMovieCardProps> = ({ movie }) => {
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
        </div>
      </div>
    </li>
  );
};

export default MovieCard;

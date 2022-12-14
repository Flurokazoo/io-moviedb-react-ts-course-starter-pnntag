import { FunctionComponent, useContext } from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Toggle from '../components/Toggle';
import { IMovie } from '../model/movie';
import { FavoritesContext } from '../context/FavoritesContext';
import Spinner from '../components/Spinner';

const Detail: FunctionComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { findFavorite, toggleFavoritesEntry } = useContext(FavoritesContext);

  const fetchMovie = async () => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=1a993ee0&i=${id}`
    );

    return response.json();
  };

  const { data, isLoading } = useQuery<IMovie>(['movie', id], fetchMovie);

  if (data?.Response === 'False') {
    navigate('/home');
  }

  const handleToggle = () => (data ? toggleFavoritesEntry(data) : null);

  return (
    <>
      {!isLoading && data ? (
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
              <div>
                <div className="w-full aspect-w-1 aspect-h-1">
                  <img
                    className="w-full h-full object-center object-cover sm:rounded-lg"
                    src={data.Poster}
                  />
                </div>
              </div>
              <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                <Toggle
                  enabled={findFavorite(data.imdbID) ? true : false}
                  onToggle={handleToggle}
                />
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {data.Title}
                </h1>
                <div className="mt-3">
                  <p className="text-3xl text-gray-900">{data.Year}</p>
                </div>
                <div className="mt-3">
                  <p className="text-xl text-gray-900">{data.Actors}</p>
                </div>
                <div className="mt-6">
                  <h3 className="sr-only">Description</h3>
                  <div className="text-base text-gray-700 space-y-6">
                    <p>{data.Plot}</p>
                  </div>
                </div>
                <div className="mt-8 flex justify-between">
                  <Link to="/home">Go Back</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Detail;

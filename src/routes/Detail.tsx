import { FunctionComponent } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Toggle from '../components/Toggle';
import { IMovie } from '../model/movie';

const Detail: FunctionComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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

  return (
    <>
      {!isLoading ? (
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
              <div>
                <div className="w-full aspect-w-1 aspect-h-1">
                  <img className="w-full h-full object-center object-cover sm:rounded-lg" />
                </div>
              </div>
              <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                <Toggle />
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Movie title
                </h1>
                <div className="mt-3">
                  <p className="text-3xl text-gray-900">Year</p>
                </div>
                <div className="mt-3">
                  <p className="text-xl text-gray-900">Actors</p>
                </div>
                <div className="mt-6">
                  <h3 className="sr-only">Description</h3>
                  <div className="text-base text-gray-700 space-y-6">
                    <p>Plot</p>
                  </div>
                </div>
                <div className="mt-8 flex justify-between">
                  {/* link back */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

export default Detail;

import { FunctionComponent, useContext, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { FavoritesContext } from '../context/FavoritesContext';
import { IMovie } from '../model/movie';

interface EditRouteParams {
  id: string;
}

const Edit: FunctionComponent = () => {
  const { register, handleSubmit, reset } = useForm<IMovie>();
  const { findFavorite } = useContext(FavoritesContext);
  const navigate = useNavigate();
  const { id } = useParams<keyof EditRouteParams>() as EditRouteParams;
  const onSubmit: SubmitHandler<IMovie> = (data) => {};

  const movie = findFavorite(id);

  if (!movie) navigate('/home');
  useEffect(() => reset(movie), [movie, reset]);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <div>
            <div className="w-full aspect-w-1 aspect-h-1">
              <img className="w-full h-full object-center object-cover sm:rounded-lg" />
            </div>
          </div>
          <form>
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <div className="mt-1">
                  <input
                    {...register('Title')}
                    name="Title"
                    type="text"
                    className="shadow-sm p-2 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700">
                  Year
                </label>
                <div className="mt-1">
                  <input
                    {...register('Year')}
                    name="Year"
                    type="text"
                    className="shadow-sm p-2 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700">
                  Actors
                </label>
                <div className="mt-1">
                  <input
                    {...register('Actors')}
                    name="Actors"
                    type="text"
                    className="shadow-sm p-2 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  className="text-sm text-blue-500 hover:text-black"
                  type="submit"
                >
                  Save favorite
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;

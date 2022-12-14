import { FunctionComponent } from 'react';
import MovieCard from '../components/MovieCard';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { IMovie, IMovieSearch } from '../model/movie';
import Spinner from '../components/Spinner';

const Home: FunctionComponent = () => {
  const [params] = useSearchParams();

  const fetchMovies = async () => {
    const searchQuery = params.get('search');
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=1a993ee0&s=${searchQuery}`
    );

    return response.json();
  };

  const { data, isSuccess, isLoading } = useQuery<IMovieSearch>(
    ['movies', params.get('search')],
    fetchMovies,
    {
      enabled: !!params.get('search'),
    }
  );

  return (
    <>
      {!isLoading ? (
        isSuccess &&
        data.Search && (
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {data.Search.map((movie: IMovie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </ul>
        )
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Home;

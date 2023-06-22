import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchAPI from 'services/fetchAPI';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (movie) {
      return;
    }
    setIsLoading(true);
    fetchAPI(`movie/${movieId}`)
      .then(response => setMovie(response))
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false));
  }, [movie, movieId]);

  return (
    <main>
      <button type="button">Back</button>
      {isLoading && <p>Loading...</p>}

      {movie && (
        <div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title || movie.name}
            />
          </div>
          <div>
            <h2>{movie.title || movie.name}</h2>
            <p>User score: </p>
            <h3>Overview</h3>
            <p></p>
            <h4>Genres</h4>
            <p></p>
          </div>
        </div>
      )}
    </main>
  );
}

import Item from 'modules/components/Item/Item';
import { Link } from 'react-router-dom';
import fetchAPI from 'services/fetchAPI';
import { useEffect, useState } from 'react';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchAPI('trending/all/day')
      .then(response => setMovies(response.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <main>
      <ul>
        {movies.map(({ id, name, poster_path, title }) => {
          return (
            <Link key={id} to={`/movies/${id}`}>
              <Item options={{ name, title, poster_path }}></Item>
            </Link>
          );
        })}
      </ul>
    </main>
  );
}

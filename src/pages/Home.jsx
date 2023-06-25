import Item from 'modules/components/Item';
import { useLocation } from 'react-router-dom';
import fetchAPI from 'services/fetchAPI';
import { useEffect, useState } from 'react';
import { List, Movie, Title } from 'modules/components/others/List.styled';
import { Container } from 'modules/components/others/Container.styled';

export default function Home() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log('1');
    fetchAPI('trending/all/day')
      .then(response => setMovies(response.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <main>
      <Container>
        <Title>Trending today</Title>
        <List>
          {movies.map(({ id, name, poster_path, title }) => {
            return (
              <Movie key={id} to={`/movies/${id}`} state={{ from: location }}>
                <Item options={{ name, title, poster_path }}></Item>
              </Movie>
            );
          })}
        </List>
      </Container>
    </main>
  );
}

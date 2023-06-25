import { useEffect, useRef, useState } from 'react';
import fetchAPI from 'services/fetchAPI';
import { useLocation, useSearchParams } from 'react-router-dom';
import Item from 'modules/components/Item/Item';
import { Button } from 'modules/components/MovieDetails/MovieDetails.styled';
import { Form, LoadMoreButton } from 'modules/components/others/Form.styled';
import { Container } from 'modules/components/others/Container.styled';
import { List, Movie } from 'modules/components/others/List.styled';

export default function Movies() {
  const [movies, setMovies] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name');
  const page = Number(searchParams.get('page'));
  const location = useLocation();
  const first = useRef(true);
  const shouldRenderList = location.search && movies;

  useEffect(() => {
    if (!name) {
      return;
    }

    fetchAPI(`search/movie?query=${name}&page=${page}`).then(response => {
      if (first.current) {
        setMovies(response.results);
        first.current = false;
        return;
      } else {
        setMovies(s => [...s, ...response.results]);
        return;
      }
    });
  }, [name, page]);

  return (
    <main>
      <Container>
        <Form
          onSubmit={evt => {
            const value = evt.currentTarget.elements.movie.value;
            evt.preventDefault();
            first.current = true;
            setSearchParams({ name: value, page: 1 });
            evt.currentTarget.reset();
          }}
        >
          <input type="text" name="movie" />
          <Button type="submit">Search</Button>
        </Form>
        {shouldRenderList && (
          <>
            <List>
              {movies.map(({ id, name, poster_path, title }) => (
                <Movie key={id} to={`/movies/${id}`} state={{ from: location }}>
                  <Item options={{ name, title, poster_path }}></Item>
                </Movie>
              ))}
            </List>
            <LoadMoreButton
              type="button"
              onClick={() => {
                setSearchParams({ name, page: page + 1 });
              }}
            >
              Load more
            </LoadMoreButton>
          </>
        )}
      </Container>
    </main>
  );
}

import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import fetchAPI from 'services/fetchAPI';
import { Container } from '../others/Container.styled';
import {
  AdditionalBox,
  AdditionalLink,
  AdditionalList,
  Button,
  DetailsBox,
  ImageBox,
  InfoBox,
  SubTitle,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const location = useLocation();

  const { movieId } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    if (movie) {
      return;
    }
    fetchAPI(`movie/${movieId}`)
      .then(response => setMovie(response))
      .catch(err => console.error(err));
  }, [movie, movieId]);

  return (
    <main>
      <Container>
        <Link to={location.state?.from ?? '/'} state={{ from: location }}>
          <Button type="button">&#129044; Go back</Button>
        </Link>
        {movie && (
          <DetailsBox>
            <InfoBox>
              <ImageBox>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : 'https://i.imgur.com/Z2MYNbj.png'
                  }
                  alt={movie.title || movie.name}
                />
              </ImageBox>
              <div>
                <h2>{movie.title || movie.name}</h2>
                <p>User score: {movie.vote_average} </p>
                <SubTitle>Overview</SubTitle>
                <p>{movie.overview}</p>
                <SubTitle>Genres</SubTitle>
                <p>
                  {movie.genres.map(({ name }, idx, genres) => {
                    if (genres.length - 1 === idx) {
                      return name;
                    }
                    return `${name}, `;
                  })}
                </p>
              </div>
            </InfoBox>
            <AdditionalBox>
              <h5>Additional information</h5>
              <AdditionalList>
                <AdditionalLink>
                  <Link to={'cast'}>Cast</Link>
                </AdditionalLink>
                <AdditionalLink>
                  <Link to={'reviews'}>Reviews</Link>
                </AdditionalLink>
              </AdditionalList>
            </AdditionalBox>
            <Outlet />
          </DetailsBox>
        )}
      </Container>
    </main>
  );
}

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchAPI from 'services/fetchAPI';
import { CastImage, CastItem, CastList } from './Cast.styled';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState();

  useEffect(() => {
    fetchAPI(`movie/${movieId}/credits`)
      .then(response => setCast(response.cast))
      .catch(err => console.error(err));
  }, [movieId]);
  return (
    <>
      {cast && (
        <CastList>
          {cast.map(({ name, profile_path, id }) => (
            <CastItem key={id}>
              <CastImage
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : 'https://cameronsbms.co.uk/app/uploads/2017/09/placeholder-human.jpg'
                }
                alt={name}
              />
              <p>{name}</p>
            </CastItem>
          ))}
        </CastList>
      )}
    </>
  );
}

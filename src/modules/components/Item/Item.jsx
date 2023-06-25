import { Box, Name } from './Item.styled';

export default function Item({ options }) {
  const { name, title, poster_path } = options;
  return (
    <Box>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : 'https://i.imgur.com/Z2MYNbj.png'
        }
        alt={title || name}
      />
      <Name>{title || name}</Name>
    </Box>
  );
}

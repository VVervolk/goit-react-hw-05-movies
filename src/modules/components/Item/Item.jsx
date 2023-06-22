export default function Item({ options }) {
  const { name, title, poster_path } = options;
  return (
    <li>
      <img
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt={title || name}
      />
      <p>{title || name}</p>
    </li>
  );
}

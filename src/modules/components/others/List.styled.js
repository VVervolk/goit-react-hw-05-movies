import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Title = styled.h2`
  color: var(--white-color);
  margin-bottom: 20px;
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Movie = styled(Link)`
  width: calc(25% - 15px);
`;

export const LoadMore = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

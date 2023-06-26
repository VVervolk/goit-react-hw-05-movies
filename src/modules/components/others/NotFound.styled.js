import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NotFoundBox = styled.div`
  display: block;
  max-width: 500px;
  margin: 200px auto 0;
  padding: 20px 12px;

  background-color: var(--white-color);
  border: 4px solid var(--turquoise-color);
  border-radius: 12px;
`;

export const NotFoundTitle = styled.p`
  font-size: xx-large;
  font-weight: 700;
  text-align: center;
  margin-bottom: 8px;
`;

export const NotFoundMsg = styled.h1`
  font-size: large;
  font-weight: 500;
  text-align: center;
  margin-bottom: 12px;
`;

export const NotFoundJoke = styled.p`
  font-size: large;
  font-weight: 500;
  text-align: center;
  font-style: italic;
  margin-bottom: 8px;
`;

export const NotFoundProposal = styled.p`
  font-size: large;
  font-weight: 300;
  text-align: center;
`;

export const NotFoundLink = styled(Link)`
  display: inline-block;
  text-decoration: underline;
  text-decoration-color: var(--turquoise-color);
`;

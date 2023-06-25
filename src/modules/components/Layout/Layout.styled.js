import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: var(--main-bg-color);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom: 4px solid var(--turquoise-color);
`;

export const Nav = styled.nav`
  display: flex;
  gap: 12px;
`;

export const StyledLink = styled(NavLink)`
  background-color: var(--white-color);
  padding: 4px 8px;
  border-radius: 12px;
  color: var(--grey-color);

  &.active {
    background-color: var(--turquoise-color);
    color: var(--main-bg-color);
  }
`;

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Nav, StyledLink } from './Layout.styled';
import { Container } from '../others/Container.styled';

export default function Layout() {
  return (
    <>
      <Header>
        <Container>
          <Nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </Nav>
        </Container>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

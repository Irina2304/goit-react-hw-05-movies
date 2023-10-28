import styled from 'styled-components';
import { Navigation } from './Novigation';
import { Outlet } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Layout = () => {
  return (
    <Container>
      <header>
        <Navigation />
      </header>

      <Outlet />
    </Container>
  );
};

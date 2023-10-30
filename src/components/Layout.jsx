import styled from 'styled-components';
import { Navigation } from './Novigation';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Layout = () => {
  return (
    <>
      <header>
        <h1>The Movies</h1>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

// import { Header, MainTitle, Nav, NavLinkStyle } from './Layout.styled';

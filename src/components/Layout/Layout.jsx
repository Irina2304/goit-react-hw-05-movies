//
import { Navigation } from '../Novigation/Novigation';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, MainName, Main } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <MainName>The Movies</MainName>
        <Navigation />
      </Header>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

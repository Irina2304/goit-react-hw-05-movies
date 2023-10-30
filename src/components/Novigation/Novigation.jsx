import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MainNav } from './Novigation.styled';

const Link = styled(NavLink)`
  font-size: 18px;
  &.active {
    color: #fefcfa;
  }
`;

export const Navigation = () => {
  return (
    <MainNav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </MainNav>
  );
};

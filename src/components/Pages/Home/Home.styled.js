import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HomeLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-family: cursive;
   &:hover {
    color: rgba(238, 13, 13, 0.993);
  }
`;
export const HomeH2 = styled.h2`
  display: flex;
  justify-content: center;
  font-family: cursive;
`;

export const HomeLi = styled.li`
  list-style: none;
`;

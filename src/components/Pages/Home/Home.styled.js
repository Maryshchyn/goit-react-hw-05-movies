import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HomeH1 = styled.h1`
  display: flex;
  justify-content: center;
  font-family: cursive;
  margin-bottom: 100px;
`;

export const HomeLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-family: cursive;
   &:hover {
    color: rgba(238, 13, 13, 0.993);
  }
`;
export const HomeH2 = styled.h2`
 font-size: 0.8em;
 
`;

export const HomeLi = styled.li`
  list-style: none;
`;

export const HomeUl = styled.ul`
display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

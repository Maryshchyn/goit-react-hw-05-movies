import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AppBarLink = styled(NavLink)`
 margin: 8px;
 display: flex;
 justify-content: flex-start;
 text-decoration: none;
 color: black;
  font-family: cursive;
   &:hover {
    color: rgba(238, 13, 13, 0.993);
  }
`;
export const AppBarUl = styled.ul`
  display: flex;
  
`;
export const AppBarLi = styled.li`
  display: flex;
  
`;
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieLink = styled(NavLink)`
 text-decoration: none;
  color: black;
  font-family: cursive;
   border-color: transparent;
`;
export const DetailsLi = styled.li`
list-style: none;
margin-left: 50px;
  
`;
export const DetailsDiv = styled.div`
display: flex;
  
`;
export const DetailsDivDesc = styled.div`
margin-left: 50px;
  margin-top: 100px;
`;
export const GenresLi = styled.li`
list-style: none;
padding: 0;
  
`;
export const GenresUl = styled.ul`

padding: 0;
  
`;

export const MovInfoDiv = styled.div`
margin-left: 95px;
`;

export const InfoLi = styled.li`
 list-style: none;
 margin-right: 10px;
`;

export const LinkInfo = styled(NavLink)`
 text-decoration: none;
 `;
 export const InfoUl = styled.ul`
 padding: 0;
 display: flex;
`;
import {  NavLink, Outlet } from "react-router-dom"


export const AppBar = () => {
   return (<>
        <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="movies">Movies</NavLink>
            </li>
        </ul>
        <Outlet/>
        </>
        
    )
}


import {  NavLink, Outlet } from "react-router-dom"

// const navItem = [
//     { href: '/', text: 'Home' },
//     {href: 'movie', text: 'Movie'},
// ]

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

//  return (<>
//         <ul>
//             <li>
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/movies">Movies</NavLink>
//             </li>
//         </ul>
//         <Outlet />
//         </>
        
//     )
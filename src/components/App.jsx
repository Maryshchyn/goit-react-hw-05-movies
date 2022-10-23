import { Routes, Route } from "react-router-dom";
import { Loyout } from "./Loyout/Loyout";
import { Home } from './Pages/Home';
import { Movies } from './Pages/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Loyout />}>

          <Route index element={<Home/>}/>
            
          
          <Route path="movies" element={<Movies />}/>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews/>} />

            </Route>
          
          
        </Route>


        <Route path="*" element={<Loyout />}></Route>
      </Routes>
    </div>
  );
};
//   const [movies, setMovies] = useState([]);
// console.log(movies)
//   useEffect(() => {
//   axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=518d624082d6ba170a75ad4d399f89a3').then(data=>{setMovies(data.data.results
// )})
// })
//   return (
//     <div>
//       <ul>
//          <h1>Trending today</h1>
//         {movies.map(({ id, original_title }) => (
//                 <li key={id} to={id}>
//           {original_title}
//         </li>
//             ))}
//       </ul>
//   </div>
// )

// };
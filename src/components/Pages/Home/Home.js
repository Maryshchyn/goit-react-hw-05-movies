import { useEffect, useState } from "react";
import axios from "axios";
// import { NavLink } from "react-router-dom";
import {HomeH2, HomeLi, HomeLink} from './Home.styled'

export const Home = () => {
 const KEY = '47d87a6ded9ca2ccb65e37d85c25f2f6';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
     axios
      .get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`)
      .then(response => setMovies(response.data.results));
  }, []);

  

  return (<>
    
    <div>
      
      <HomeH2 >Trending movies</HomeH2>
      <div >
      
          { movies.map(({id, original_title, poster_path}) => {
            return (
        
        <HomeLink
          
          key={id}
          to={`movies/${id}`}
        >
                <ul>
                  <HomeLi>{original_title}</HomeLi>
               </ul>
              </HomeLink>
              
              
      );
    })}
        
      </div>
    </div>
    </>
  );

  
}
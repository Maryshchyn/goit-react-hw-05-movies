import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


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
      
      <h2 >Trending movies</h2>
      <div >
      
          { movies.map(({id, original_title, poster_path}) => {
            return (
        
        <Link
          
          key={id}
          to={`movies/${id}`}
        >
          <div>
            <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt=''/>
            <h3>{original_title}</h3>
          </div>
              </Link>
              
              
      );
    })}
        
      </div>
    </div>
    </>
  );

  
}
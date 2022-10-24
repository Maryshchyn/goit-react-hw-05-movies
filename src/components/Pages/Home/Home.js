import { useEffect, useState } from "react";
import axios from "axios";
// import { NavLink } from "react-router-dom";
import {StyledLink, Navigation, HomeDiv, HomeH2} from './Home.styled'


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
      
      <Navigation >Trending movies</Navigation>
      <div >
      
          { movies.map(({id, original_title, poster_path}) => {
            return (
        
        <StyledLink
          
          key={id}
          to={`movies/${id}`}
        >
          <HomeDiv>
            <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt=''/>
            <HomeH2>{original_title}</HomeH2>
          </HomeDiv>
              </StyledLink>
              
              
      );
    })}
        
      </div>
    </div>
    </>
  );

  
}
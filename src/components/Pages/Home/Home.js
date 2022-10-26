import { useEffect, useState } from "react";
import {  useLocation } from "react-router-dom";

import {apiHome} from '../../Src/Src';
import {HomeH2, HomeLi, HomeLink, HomeH1, HomeImg, HomeUl} from './Home.styled'

export const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
     async function retApi() {
     
        setMovies(await apiHome());
    }
    retApi()
  }, []);

  if (!movies) {
    return;
  }

 return (
    <>
      <HomeH1>Trending today</HomeH1>
      <HomeUl>
        {movies.map(movie => (
          <HomeLi key={movie.id}>
            <HomeLink to={`movies/${movie.id}`} state={{ from: location }}>
              <HomeImg
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt=""
              />
              <HomeH2>{movie.title}</HomeH2>
            </HomeLink>
          </HomeLi>
        ))}
      </HomeUl>
    </>
  );
  

  
}
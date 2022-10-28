import axios from "axios";
import { useEffect, useState } from "react";
import {  NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { DetailsLi, DetailsDiv,DetailsDivDesc ,GenresLi,GenresUl, MovInfoDiv,InfoLi,LinkInfo,InfoUl} from './MovieDetail.styled'
import {Key} from '../Utils/constants'

export const MovieDetails = () => {
  const [movies, setMovies] = useState(null);
  const [genres, setGenres] = useState([]);
  const location = useLocation();
  
 
  const backLinkHref = location.state?.from || '/';
  
  const { movieId } = useParams();
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${Key}&language=en-US`).then(res => {
        setGenres(res.data.genres);
        return setMovies(res.data);
      });
  },[movieId])
  
  if (!movies) {
    return null
  }

  const { original_title, release_date, poster_path } = movies;
console.log(location)
  
  return (<>
    <NavLink to={location.state?.from}>Go back</NavLink>

    
    <div>

      <DetailsDiv>
      
        <div>
        <ul>
      <DetailsLi><h2>{original_title}</h2></DetailsLi>
      <DetailsLi><p>{ release_date}</p></DetailsLi>
      <DetailsLi><img  src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt='' /></DetailsLi>
        </ul>
      </div>
        
        
        <DetailsDivDesc>
      <GenresUl>
            <h3>Genres</h3>
              {genres.map(genre => {
                if (!genre) {
                  return <li>Not specified</li>;
                } else {
                  return (
                    <GenresLi  key={genre.id}>
                      {genre.name}
                    </GenresLi>
                  );
                }
              })}
          </GenresUl>
        <h3>User score</h3>
        <p>{movies.vote_average}</p>
        <h3>Overview</h3>
        <p>{ movies.overview}</p>
     </DetailsDivDesc>

      </DetailsDiv>


    <MovInfoDiv>

      <h2>Additional information</h2>
      <InfoUl>
        <InfoLi>
          <LinkInfo to='cast' state={{from: backLinkHref}}>Cast</LinkInfo>
        </InfoLi>
        <InfoLi>
          <LinkInfo to='reviews' state={{from: backLinkHref}}>Reviews</LinkInfo>
        </InfoLi>
      </InfoUl>
      </MovInfoDiv>



      <Outlet />
      

    </div>
    

    </>)
}
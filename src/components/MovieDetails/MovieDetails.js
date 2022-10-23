import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom"



export const MovieDetails = () => {
  const [movies, setMovies] = useState(null);
  const [genres, setGenres] = useState([])
  
  const KEY = '518d624082d6ba170a75ad4d399f89a3';
  const { movieId } = useParams();
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&language=en-US`).then(res => {
        setGenres(res.data.genres);
        return setMovies(res.data);
      });
  },[movieId])
  
  if (!movies) {
    return null
  }

  const { original_title, release_date, poster_path } = movies;

  
  return (<>
    <Link to='/'>Go back</Link>
    <div><ul>
      <li><h2>{original_title}</h2></li>
      <li><p>{ release_date}</p></li>
      <li><img  src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt='' /></li>
    </ul>
      <div>
      <ul>
              {genres.map(genre => {
                if (!genre) {
                  return <li>Not specified</li>;
                } else {
                  return (
                    <li  key={genre.id}>
                      {genre.name}
                    </li>
                  );
                }
              })}
        </ul>
        <h3>User score</h3>
        <p>{movies.vote_average}</p>
        <h3>Overview</h3>
        <p>{ movies.overview}</p>
      </div>
      <h2>Additional information</h2>
      <ul>
        <li>
          <NavLink to='cast'>Cast</NavLink>
        </li>
        <li>
          <NavLink to='reviews'>Reviews</NavLink>
        </li>
      </ul>
      <NavLink />
      <Outlet/>
    </div>
    

    </>)
}

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const Cast =()=> {
  const [cast, setCast] = useState([]);
    const { movieId } = useParams();
    const KEY = '518d624082d6ba170a75ad4d399f89a3';
    console.log(cast)

  useEffect(() => {
     axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}`
      )
      .then(response => {
        return setCast(response.data.cast);
      });
  }, [movieId]);

  

  
    return cast.map(actor => {
      return (
        <div key={actor.cast_id}>
          <p>{actor.name}</p>
          <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path
}`} alt=''/>
        </div>
      );
    });
  }

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

  return (
     <ul>
          {cast.map(({ id, original_name, profile_path }) => (
            <li key={id}>
              {profile_path ? (
                <img
                  src={`https://www.themoviedb.org/t/p/w200${profile_path}`}
                  alt=""
                  
                />
              ) : (
                <p>Фото не знайдено</p> 
              )}

              <p>{original_name}</p>
              
            </li>
          ))}
        </ul>
  )
 
  }

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {apiCast} from '../Src/Src';

export const Cast =()=> {
  const [cast, setCast] = useState([]);
    const { movieId } = useParams();
    
    console.log(cast)

  useEffect(() => {
    async function retApi() {
        setCast(await apiCast(movieId));
    }
    retApi()
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
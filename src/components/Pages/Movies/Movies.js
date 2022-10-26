

import {  useEffect, useState } from 'react';

import {  useLocation, useSearchParams } from 'react-router-dom';
import { MovieLink, MovieButton, MovieForm, MovieInput } from './Movies.styled';
import {apiSearch} from '../../Src/Src';

export const Movies = () => {
  const location = useLocation()
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search  = searchParams.get('query') ?? '';
  
  useEffect(() => {
    if (search !== '') {
      async function retApi() {
        
          const items = await apiSearch(search );
          setFilms(items.results);
        
      }
      retApi();
    }
  }, [search]);
  
  if (!films) {
    return null;
  }
  
  function handleChange(e) {
     setQuery(e.target.value.toLowerCase());
  }

  const hendleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Введіть щось');
      return;
    }
    setQuery(query);

    setSearchParams(query !== '' ? { query: query } : '');
  };


  

   return (
    <div>
      <div>
        <MovieForm onSubmit={hendleSubmit}>
          <MovieInput
            type="text"
            onChange={handleChange}
            name={search}
            value={query}
            placeholder={'Веедіть назву фільму'}
          ></MovieInput>
          <MovieButton type="submit">
            Пошук
          </MovieButton>
        </MovieForm>
      </div>
      <div>
        <ul>
          {films.map(film => (
            <li key={film.id}>
              <MovieLink to={`${film.id}`} state={{from: location}}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${film.poster_path}`}
                  alt=""
                />
                <h2>{film.title}</h2>
              </MovieLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}







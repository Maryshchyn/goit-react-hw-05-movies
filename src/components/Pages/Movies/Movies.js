

import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




export const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchMovie, setSearchMovie] = useState([]);
  
  
  console.log(searchMovie)
  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) {
      alert('Введіть щось');
    } else {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=518d624082d6ba170a75ad4d399f89a3&query=${query}`
        )
        .then(result => setSearchMovie(result.data.results));
    }
  }

  function searchedMovies() {
    return searchMovie.map(({id, title}) => {
      return (
        <Link
          
          key={id}
          to={id.toString()}
        >
          <div>{title}</div>
        </Link>
      );
    });
  }

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <input
          
          type="text"
          name="searchQuery"
          value={query}
          onChange={handleChange}
          placeholder='Search a movie...'
        />
        
      </form>
      {searchedMovies()}
      <Link to={`${query.id}`}>{query.id}</Link>
      
    </div>
  );
}
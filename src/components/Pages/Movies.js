

import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedMoviesList, setSearchedMoviesList] = useState([]);
  // console.log(searchQuery)
  
  console.log(searchedMoviesList)
  function handleChange(e) {
    setSearchQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!searchQuery) {
      alert('Please enter a search query');
    } else {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=518d624082d6ba170a75ad4d399f89a3&query=${searchQuery}`
        )
        .then(result => setSearchedMoviesList(result.data.results));
    }
  }

  function searchedMovies() {
    return searchedMoviesList.map(({id, title}) => {
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
          value={searchQuery}
          onChange={handleChange}
          placeholder='Search a movie...'
        />
        
      </form>
      {searchedMovies()}
      <Link to={`${searchQuery.id}`}>{searchQuery.id}</Link>
      
    </div>
  );
}
import {apiReviews} from '../Src/Src';
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  
    
  
  useEffect(() => {
   async function qwe() {
     const movieCast = await apiReviews(movieId);
        setReviews(movieCast);
    }
    qwe()
    }, [movieId]);

    
  return (
    <ul>
      {reviews.map(({id, author, content}) => (
        <li key={id}>
          <p>Author: {author}</p>
          <p>{ content}</p>
        </li>
      ))}
    </ul>
  )
  

  
}
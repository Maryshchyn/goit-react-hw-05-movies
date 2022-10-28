import {apiReviews} from '../Utils/api';
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  
    
  
  useEffect(() => {
   async function retApi() {
    
        setReviews(await apiReviews(movieId));
    }
    retApi()
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
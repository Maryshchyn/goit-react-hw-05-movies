import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const KEY = '518d624082d6ba170a75ad4d399f89a3';
    
  
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`)
      .then(res => {
        return setReviews(res.data.results);
      })
    }, [movieId]);

    
    return reviews.map(review => {
      return (
        <div key={review.id}>
              <p>Author: {review.author}</p>
              <p>{ review.content}</p>
        </div>
      );
    });
  

  
}
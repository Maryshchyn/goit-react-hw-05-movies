import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    console.log(reviews)
    const KEY = '518d624082d6ba170a75ad4d399f89a3';
    const { movieId } = useParams();
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`).then(res => { setReviews(res.data.results) })
    }, []);

    
    return reviews.map(review => {
      return (
        <div key={review.id}>
              <p>Author: {review.author}</p>
              <p>{ review.content}</p>
        </div>
      );
    });
  

  
}
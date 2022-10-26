import { useEffect, useState } from "react";

import {apiHome} from '../../Src/Src';
import {HomeH2, HomeLi, HomeLink} from './Home.styled'

export const Home = () => {
 
  const [movies, setMovies] = useState([]);

  useEffect(() => {
     async function retApi() {
     
        setMovies(await apiHome());
    }
    retApi()
  }, []);

  

  return (<>
    
    <div>
      
      <HomeH2 >Trending movies</HomeH2>
      <div >
      
          { movies.map(({id, original_title}) => {
            return (
        
        <HomeLink
          
          key={id}
          to={`movies/${id}`}
        >
                <ul>
                  <HomeLi>{original_title}</HomeLi>
               </ul>
              </HomeLink>
              
              
      );
    })}
        
      </div>
    </div>
    </>
  );

  
}
import { Link } from 'react-router-dom';

export const GoBackBtnMovie =() =>{
  return (
    <Link  to={'/movies'}>
      
      <p>Go back Movies</p>
    </Link>
  );
}
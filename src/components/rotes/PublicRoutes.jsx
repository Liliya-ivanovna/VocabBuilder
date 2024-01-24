import { Navigate } from 'react-router-dom';
//import { useAuth } from '../../hooks';

const PublicRoute = ({ component: Component, redirectto = '/user' }) => {
  //const { isLoggedIn } = useAuth();

  return  <Navigate to={redirectto} /> ;
};

export default PublicRoute;
import { Route, Routes } from 'react-router-dom';
import { lazy} from 'react';
import { Layout } from './Layout/Layout';
import PublicRoute from './rotes/PublicRoutes';

const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
export const App = () => {
  return (<>
    <Register/>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/register" element={ <PublicRoute redirectto="/profile" component={Register} />} />
        <Route path="/login" element={<PublicRoute redirectto="/profile" component={Login} />} />

      </Route>
    </Routes>
    </>
  );
};

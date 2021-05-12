import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoutes = ({ path, exact, component }) => {
  const isAuth = useSelector(state => state.auth.token);

  return isAuth ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to="/" />
  );
};

export default PrivateRoutes;

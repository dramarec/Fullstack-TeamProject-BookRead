import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoutes = ({ path, exact, component, restricted }) => {
    const isAuth = useSelector(state => state.auth.token);

    return isAuth && restricted ? (
        <Redirect to="/library" />
    ) : (
        <Route path={path} exact={exact} component={component} />
    );
};

export default PublicRoutes;

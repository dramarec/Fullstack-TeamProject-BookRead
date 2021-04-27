import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import mainRoutes from '../../routes/routes';
import AppBarStyled from './AppBarStyled';
import authOperations from '../../redux/operations/authOperation';

const AppBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logOut = () => {
    dispatch(authOperations.logOutOperation());
    history.push('/');
  };

  return (
    <AppBarStyled>
      <div className="container">
        <nav className="navigation">
          <ul className="navlist">
            <li className="logo link">
              <NavLink to="/" className="logo__descr link">
                BR
              </NavLink>
            </li>

            <li className="titleNameWrap">
              <span className="titleNameWrap__icon">M</span>

              <p className="titleNameWrap__name">Martha Stewart</p>
            </li>

            <li className="navListItem">
              <ul className="rightNav">
                {mainRoutes.map(
                  ({ isPrivate, path, icon, exact }) =>
                    isPrivate && (
                      <li key={path}>
                        <NavLink to={path} exact={exact} className="navLink">
                          {icon}
                        </NavLink>
                      </li>
                    ),
                )}
              </ul>
            </li>

            <li className="exit link">
              <button type="button" onClick={logOut}>
                Вихід
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </AppBarStyled>
  );
};

export default AppBar;

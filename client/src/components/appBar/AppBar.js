import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import mainRoutes from '../../routes/routes';
import AppBarStyled from './AppBarStyled';
import Modal from '../modal/Modal';
import authOperations from '../../redux/operations/authOperation';
import authSelectors from '../../redux/selectors/authSelector';

const AppBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const isAuth = useSelector(state => state.auth.token);
  const name = useSelector(authSelectors.getUserName);

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const logOut = () => {
    dispatch(authOperations.logOutOperation());
    history.push('/');

    setShowModal(false);
  };

  return (
    <AppBarStyled>
      <div className="container">
        <nav className="navigation">
          {isAuth ? (
            <ul className="navlist">
              <li className="logo link">
                <NavLink to="/" className="logo__descr link">
                  BR
                </NavLink>
              </li>

              <li className="titleNameWrap">
                <span className="titleNameWrap__icon">{name.substr(0, 1)}</span>

                <p className="titleNameWrap__name">{name}</p>
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

              <li className=" link">
                <button className="exit" type="button" onClick={handleClick}>
                  Вихід
                </button>
              </li>
            </ul>
          ) : (
            <ul className="navlist">
              <li className="logo link">
                <NavLink to="/" className="logo__descr link">
                  BR
                </NavLink>
              </li>
            </ul>
          )}
        </nav>
      </div>

      {showModal && (
        <Modal onToggleModal={closeModal}>
          <div className="exit-modal">
            <p>Якщо Ви вийдете з програми незбережені дані будуть втрачені</p>
            <div className="btn-wrapper">
              <button type="button" className="cancel" onClick={closeModal}>
                Відміна
              </button>
              <button type="button" className="exit" onClick={logOut}>
                Вийти
              </button>
            </div>
          </div>
        </Modal>
      )}
    </AppBarStyled>
  );
};

export default AppBar;

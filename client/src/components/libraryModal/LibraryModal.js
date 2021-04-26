import React from 'react';
import { useDispatch } from 'react-redux';
import Responsive from 'react-responsive';
import modalActions from '../../redux/actions/modalAction';
import book from '../../assets/svg/book3.svg';
import vector from '../../assets/svg/vector.svg';
import flag from '../../assets/svg/flag.svg';
import LibraryModalStyled from './LibraryModalStyled';

const LibraryModal = () => {
  const dispatch = useDispatch();
  const Mobile = props => <Responsive {...props} maxWidth={767} />;

  const closeModal = () => {
    dispatch(modalActions.toggleModal());
  };

  return (
    <LibraryModalStyled>
      <ul className="list">
        <li className="listItem">
          Крок 1.
          <div className="listItemPart1">
            <img src={book} alt="" className="listItemImgPart1" />
            <p className="listItemTitlePart1">Створіть особисту бібліотеку</p>
          </div>
          <div className="listItemPart2">
            <img src={vector} alt="" className="listItemImgPart2" />
            <p className="listItemTitlePart2">
              Додайте до неї книжки, які маєте намір прочитати.
            </p>
          </div>
        </li>
        <li className="listItem">
          Крок 2.
          <div className="listItemPart1">
            <img src={flag} alt="" className="listItemImgPart1" />
            <p className="listItemTitlePart1">
              Сформуйте своє перше тренування
            </p>
          </div>
          <div className="listItemPart2">
            <img src={vector} alt="" className="listItemImgPart2" />
            <p className="listItemTitlePart2">
              Визначте ціль, оберіть період, розпочинайте тренування.
            </p>
          </div>
        </li>
      </ul>
      <Mobile>
        <button className="listBtn" type="button" onClick={closeModal}>
          Ok
        </button>
      </Mobile>
    </LibraryModalStyled>
  );
};

export default LibraryModal;

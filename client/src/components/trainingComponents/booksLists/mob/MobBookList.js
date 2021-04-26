import React from 'react';
import book from '../../../../assets/svg/book3.svg';
import MobBookListStyle from './MobBookListStyle';

const MobBookList = () => {
  return (
    <MobBookListStyle>
      <ul className="books">
        <li>
          <img className="books__img" src={book} alt="" />
          <span className="books__item-descr">...</span>
        </li>
        <li>
          <p className="books__item">Автор:</p>
          <span className="books__item-descr">...</span>
        </li>
        <li>
          <p className="books__item">Рік:</p>
          <span className="books__item-descr">...</span>
        </li>
        <li>
          <p className="books__item">Стор.:</p>
          <span className="books__item-descr">...</span>
        </li>
      </ul>
    </MobBookListStyle>
  );
};
export default MobBookList;

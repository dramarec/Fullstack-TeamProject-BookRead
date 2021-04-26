import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import book from '../../../../assets/svg/book3.svg';
import card from '../../../../assets/svg/card.svg';
import DescBookListStyle from './DescBookListStyle';
import trainingBooks from '../../../../redux/selectors/trainingSelector';
// const initialstate = [
//   // {
//   //   _id: '60845e4e24523d1ccdc66756',
//   //   title: 'Harry Potter',
//   //   author: 'J. K. Rowling',
//   //   year: 1997,
//   //   numberOfPages: 123,
//   // },
//   // {
//   //   _id: '6084000dc4cfc1a5455ab0ea',
//   //   title: 'Жизнь и ловля пресноводных рыб',
//   //   author: 'Сабанеев Л.П.',
//   //   year: 1875,
//   //   numberOfPages: 472,
//   // },
//   // {
//   //   _id: '608448aa0733e1b53cdad37c',
//   //   title: 'Как разговаривать с мудаками',
//   //   author: 'Марк Гоулстон',
//   //   year: 2016,
//   //   numberOfPages: 272,
//   // },
//   {
//     _id: '60845e7c24523d1ccdc66758',
//     title: 'Romero & Julieta',
//     author: 'J. K. Rowling',
//     year: 1997,
//     numberOfPages: 123,
//   },
// ];

const DescBookList = () => {
  // const [state] = useState([...initialstate]);
  // const selector = useSelector();

  const books = useSelector(trainingBooks);
  console.log('DescBookList ===> books', books);

  return (
    <DescBookListStyle>
      <div className="books-titles">
        <ul className="books-titles__list">
          <li>
            <p className="books-titles__item">Назва книги</p>
          </li>
          <li>
            <p className="books-titles__item">Автор</p>
          </li>
          <li>
            <p className="books-titles__item">Рік</p>
          </li>
          <li>
            <p className="books-titles__item">Стор.</p>
          </li>
        </ul>
      </div>

      <div className="books-library">
        <ul className="books-library__list">
          {books.map(({ _id, title, author, year, numberOfPages }) => (
            <li key={_id} className="books-library__item">
              <img className="books-library__img" src={book} alt="" />
              <p className="books-library__title">{title}</p>
              <p className="books-library__author">{author}</p>
              <p className="books-library__year">{year}</p>
              <p className="books-library__page">{numberOfPages}</p>
              <img className="books-library__card" src={card} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </DescBookListStyle>
  );
};

export default DescBookList;

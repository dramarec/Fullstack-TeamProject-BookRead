import React from 'react';
import { useSelector } from 'react-redux';
import WillReadBookItem from './WillReadBookItem';
import WillReadBooksStyled from './WillReadBooksStyled';
import Responsive from 'react-responsive';
import WillReadBookItemMobile from './WillReadBookItemMobile';
import { getWillRead } from '../../../redux/selectors/bookSelector';

const WillReadBooks = () => {
  const booksWillRead = useSelector(getWillRead);

  const Tablet = props => <Responsive {...props} minWidth={768} />;
  const Mobile = props => <Responsive {...props} maxWidth={767} />;
  return (
    <WillReadBooksStyled className="container">
      <h2>Маю намір прочитати</h2>
      <Tablet>
        <div className="table-title">
          <p>Назва книги</p>
          <p>Автор</p>
          <p>Рік</p>
          <p>Стор.</p>
        </div>
        {booksWillRead.map((item, idx) => (
          <WillReadBookItem book={item} key={idx} />
        ))}
      </Tablet>
      <Mobile>
        <WillReadBookItemMobile />
      </Mobile>
    </WillReadBooksStyled>
  );
};

export default WillReadBooks;

import React from 'react'
import ReadingBookItem from './ReadingBookItem';
import ReadBookItemMobile from './ReadingBookItemMobile';
import ReadingBooksStyled from './ReadingBooksStyled';
import Responsive from 'react-responsive'

const ReadingBooks = () => {
  const Tablet = props => (
    <Responsive {...props} minWidth={768}  />
);
const Mobile = props => <Responsive {...props} maxWidth={767} />;
    return (
        <ReadingBooksStyled className='container'>
        <h2>Читаю</h2>  
        <Tablet>
      <div className='table-title'>
         <p>Назва книги</p>
         <p>Автор</p>
         <p>Рік</p>
         <p>Стор.</p>
      </div>
      <ReadingBookItem/>
      </Tablet>
      <Mobile>
      <ReadBookItemMobile/>
      </Mobile>
        </ReadingBooksStyled>
    )
}


export default ReadingBooks

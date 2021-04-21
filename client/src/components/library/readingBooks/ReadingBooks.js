import React from 'react'
import ReadingBookItem from './ReadingBookItem';
import ReadingBooksStyled from './ReadingBooksStyled';

const ReadingBooks = () => {
    return (
        <ReadingBooksStyled className='container'>
        <h2>Читаю</h2>  
      <div className='table-title'>
         <p>Назва книги</p>
         <p>Автор</p>
         <p>Рік</p>
         <p>Стор.</p>
      </div>
      <ReadingBookItem/>
        </ReadingBooksStyled>
    )
}


export default ReadingBooks

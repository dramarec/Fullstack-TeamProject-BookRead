import React from 'react'
import WillReadBookItem from './WillReadBookItem';
import WillReadBooksStyled from './WillReadBooksStyled';

const WillReadBooks = () => {
    return (
        <WillReadBooksStyled className='container'>
        <h2>Маю намір прочитати</h2>  
      <div className='table-title'>
         <p>Назва книги</p>
         <p>Автор</p>
         <p>Рік</p>
         <p>Стор.</p>
      </div>
      <WillReadBookItem/>
      <WillReadBookItem/>
      <WillReadBookItem/>
        </WillReadBooksStyled>
    )
}


export default WillReadBooks

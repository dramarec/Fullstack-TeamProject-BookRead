import React from 'react'
import ReadBookItem from './ReadBookItem';
import ReadBookItemMobile from './ReadBookItemMobile';
import ReadBooksStyled from './ReadBooksStyled';
import Responsive from 'react-responsive'

const ReadBooks = ({bookFinished}) => {
    const Tablet = props => (
        <Responsive {...props} minWidth={768}  />
    );
    const Mobile = props => <Responsive {...props} maxWidth={767} />;
    return (
        
        <ReadBooksStyled className='container'>
        <h2>Прочитано</h2>  
        <Tablet>
      <div className='table-title'>
         <p>Назва книги</p>
         <p>Автор</p>
         <p>Рік</p>
         <p>Стор.</p>
         <p>Рейтинг книги</p>
      </div>
      <ul>
        {bookFinished.map(book => (
            <ReadBookItem key={book._id} item={book} />
        )) }
      </ul>
      </Tablet>
      <Mobile>
          <ul>
          {bookFinished.map(book => (
            <ReadBookItemMobile key={book._id} item={book} />
        )) }
          </ul>
         
      </Mobile>
        </ReadBooksStyled>
    )
}

export default ReadBooks
            
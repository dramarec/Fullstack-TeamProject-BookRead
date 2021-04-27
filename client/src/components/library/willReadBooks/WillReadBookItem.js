import React from 'react';
import book3 from '../../../assets/svg/book3.svg';
import WillReadBookItemStyled from './WillReadBookItemStyled';

const WillReadBookItem = ({ book }) => {
  return (
    <WillReadBookItemStyled>
      <li className="listItem" key={book.id}>
        <div className="bookName">
          <img src={book3} alt="" />
          <p>{book.title}</p>
        </div>
        <p className="author">{book.author}</p>
        <p className="publishYear">{book.year}</p>
        <p className="pages">{book.numberOfPages}</p>
      </li>
    </WillReadBookItemStyled>
  );
};


export default WillReadBookItem;

/*<<<<<<< HEAD
const WillReadBookItem = ({item}) => {
   // console.log(item);
    return (
        <WillReadBookItemStyled>
        <div className='bookName'>
        <img src={book3} alt=''/>
        <p>{item.title}</p>
        </div>
        <p className='author'>{item.author}</p>
        <p className='publishYear'>{item.year}</p>
        <p className='pages'>{item.numberOfPages}</p>
    
        </WillReadBookItemStyled>
       
    )
}
=======-*/
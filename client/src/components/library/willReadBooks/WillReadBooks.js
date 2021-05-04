import React from 'react';
import { useSelector } from 'react-redux';
import WillReadBookItem from './WillReadBookItem';
import WillReadBooksStyled from './WillReadBooksStyled';
import Responsive from 'react-responsive';
import WillReadBookItemMobile from './WillReadBookItemMobile';
import { getWillRead } from '../../../redux/selectors/bookSelector';

/*<<<<<<< HEAD
const WillReadBooks = ({plan}) => {
  const Tablet = props => (
    <Responsive {...props} minWidth={768}  />
);
const Mobile = props => <Responsive {...props} maxWidth={767} />;
    return (
        <WillReadBooksStyled className='container'>
        <h2>Маю намір прочитати</h2> 
        <Tablet> 
      <div className='table-title'>
         <p>Назва книги</p>
         <p>Автор</p>
         <p>Рік</p>
         <p>Стор.</p>
      </div>
      <ul>
        {
          plan.map( book=> (

            <WillReadBookItem key={book._id} item={book}/>
          ))
        }
      </ul>
      </Tablet> 
      <Mobile> 
      <WillReadBookItemMobile/>
      </Mobile> 
        </WillReadBooksStyled>
    )
}
=======*/
const WillReadBooks = () => {
    const booksWillRead = useSelector(getWillRead);
    // console.log('WillReadBooks ===> booksWillRead', booksWillRead);

    const Tablet = props => <Responsive {...props} minWidth={768} />;
    const Mobile = props => <Responsive {...props} maxWidth={767} />;
    return (
        <WillReadBooksStyled className="container">
            <Tablet>
                <h2>Маю намір прочитати</h2>
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
                <div className="willReadMobil">
                    <h2>Маю намір прочитати</h2>
                    <ul>
                        {booksWillRead.map((item, idx) => (
                            <WillReadBookItemMobile book={item} key={idx} />
                        ))}
                    </ul>
                </div>
            </Mobile>
        </WillReadBooksStyled>
    );
};

export default WillReadBooks;

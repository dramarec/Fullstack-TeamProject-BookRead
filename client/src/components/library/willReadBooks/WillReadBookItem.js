import React from 'react';
import book3 from '../../../assets/svg/book3.svg';

const WillReadBookItem = ({ book }) => {
    return (
        <>
            <li className="listItem" key={book.id}>
                <div className="bookName">
                    <img src={book3} alt="" />
                    <p>{book.title}</p>
                </div>
                <p className="author">{book.author}</p>
                <p className="publishYear">{book.year}</p>
                <p className="pages">{book.numberOfPages}</p>
            </li>
        </>
    );
};

export default WillReadBookItem;

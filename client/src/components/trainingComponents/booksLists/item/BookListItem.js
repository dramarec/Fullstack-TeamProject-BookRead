import React from 'react';
import book from '../../../../assets/svg/book3.svg';
import card from '../../../../assets/svg/card.svg';

const BookListItem = ({
    _id,
    title,
    author,
    year,
    numberOfPages,
    onDeleteBook,
}) => {
    // console.log('BookListItem ===> books', books);
    return (
        <>
            <li key={_id} className="books-library__item">
                <img className="books-library__img" src={book} alt="" />
                <p className="books-library__title">{title}</p>
                <p className="books-library__author">{author}</p>
                <p className="books-library__year">{year}</p>
                <p className="books-library__page">{numberOfPages}</p>
                <button
                    className="books-library__card"
                    type="button"
                    data-id={_id}
                    onClick={onDeleteBook}
                >
                    <img src={card} alt="" />
                </button>
            </li>
        </>
    );
};

export default BookListItem;

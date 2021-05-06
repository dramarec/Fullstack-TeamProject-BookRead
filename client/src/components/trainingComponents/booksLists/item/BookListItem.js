import React from 'react';
import { useSelector } from 'react-redux';
import { getTraining } from '../../../../redux/selectors/bookSelector';
import book from '../../../../assets/svg/book3.svg';
import readBook from '../../../../assets/svg/bookOrg.svg';
import card from '../../../../assets/svg/card.svg';

const BookListItem = ({
    _id,
    title,
    author,
    year,
    numberOfPages,
    readPages,
    onDeleteBook,
}) => {
    const isTraining = useSelector(getTraining);
    console.log(`numberOfPages`, numberOfPages);
    console.log(`readPages`, readPages);

    return (
        <>
            <li
                key={_id}
                className={
                    readPages === numberOfPages
                        ? 'books-library__item readItem'
                        : 'books-library__item'
                }
            >
                <img
                    className="books-library__img"
                    src={readPages === numberOfPages ? readBook : book}
                    alt=""
                />
                <p className="books-library__title">{title}</p>
                <p className="books-library__author">{author}</p>
                <p className="books-library__year">{year}</p>
                <p className="books-library__page">{numberOfPages}</p>
                {isTraining.duration === 0 && (
                    <button
                        className="books-library__card"
                        type="button"
                        data-id={_id}
                        onClick={onDeleteBook}
                    >
                        <img src={card} alt="" />
                    </button>
                )}
            </li>
        </>
    );
};

export default BookListItem;

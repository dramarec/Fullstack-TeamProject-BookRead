import React from 'react';
import DescBookListStyle from './DescBookListStyle';
import BookListItem from '../item/BookListItem';
import book from '../../../../assets/svg/book3.svg';

const DescBookList = ({ books, onHandleDeleteBook }) => {
    return (
        <DescBookListStyle>
            <div className="books-titles">
                <div className="books-titles__list">
                    <p>Назва книги</p>
                    <p>Автор</p>
                    <p>Рік</p>
                    <p>Стор.</p>
                </div>
            </div>
            <div className="books-library">
                <ul className="books-library__list">
                    {books?.map(books => (
                        <BookListItem
                            key={books._id}
                            {...books}
                            onDeleteBook={onHandleDeleteBook}
                        />
                    ))}
                    <li className="helpers">
                        <img src={book} alt="" className="helpersImg" />
                        <p>...</p>
                    </li>
                </ul>
            </div>
        </DescBookListStyle>
    );
};

export default DescBookList;

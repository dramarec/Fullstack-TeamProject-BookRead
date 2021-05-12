import React from 'react';
import { useSelector } from 'react-redux';
import BookListItem from '../item/BookListItem';
import trainingSelector from '../../../../redux/selectors/trainingSelector';
import book from '../../../../assets/svg/book3.svg';
import DescBookListStyle from './DescBookListStyle';

const DescBookList = ({ books, onHandleDeleteBook }) => {
    const booksList = useSelector(trainingSelector.trainingBooksList);

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
                <ul className="books-library__list scrollbar scrollbarText">
                    {books?.length > 0 || booksList?.length > 0 ? (
                        booksList?.length > 0 ? (
                            booksList.map(books => (
                                <BookListItem
                                    key={books._id}
                                    {...books}
                                    onDeleteBook={onHandleDeleteBook}
                                />
                            ))
                        ) : (
                            books
                                .map(books => (
                                    <BookListItem
                                        key={books._id}
                                        {...books}
                                        onDeleteBook={onHandleDeleteBook}
                                    />
                                ))
                                .reverse()
                        )
                    ) : (
                        <li className="helpers">
                            <img src={book} alt="" className="helpersImg" />
                            <p>...</p>
                        </li>
                    )}
                </ul>
            </div>
        </DescBookListStyle>
    );
};

export default DescBookList;

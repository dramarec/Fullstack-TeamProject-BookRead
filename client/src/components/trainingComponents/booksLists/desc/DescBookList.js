import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DescBookListStyle from './DescBookListStyle';
import trainingBooksList from '../../../../redux/selectors/trainingSelector';
import trainingOperation from '../../../../redux/operations/trainingOperation';
import BookListItem from '../item/BookListItem';
import trainingActions from '../../../../redux/actions/trainingAction';
const DescBookList = () => {
    const dispatch = useDispatch();

    const books = useSelector(trainingBooksList);
    console.log('DescBookList ===> books', books);

    const onHandleDeleteBook = e => {
        const { id } = e.currentTarget.dataset;
        console.log('DescBookList ===> id', id);
        dispatch(trainingActions.removeBookFromTraining(id));
    };

    const onHandleAddTraining = () => {
        dispatch(trainingOperation.operationAddNewBook());
    };
    return (
        <DescBookListStyle>
            <div className="books-titles">
                <ul className="books-titles__list">
                    <li className="books-titles__item">
                        <p>Назва книги</p>
                    </li>
                    <li className="books-titles__item">
                        <p>Автор</p>
                    </li>
                    <li className="books-titles__item">
                        <p>Рік</p>
                    </li>
                    <li className="books-titles__item">
                        <p>Стор.</p>
                    </li>
                </ul>
            </div>

            <div className="books-library">
                <ul className="books-library__list">
                    {books.map(books => (
                        <BookListItem
                            key={books._id}
                            {...books}
                            onDeleteBook={onHandleDeleteBook}
                        />
                    ))}
                </ul>
            </div>
            <div>
                <button onClick={onHandleAddTraining} className="bookFormBtn">
                    Почати тренування
                </button>
            </div>
        </DescBookListStyle>
    );
};

export default DescBookList;

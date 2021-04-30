import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DescBookListStyle from './DescBookListStyle';
import trainingActions from '../../../../redux/actions/trainingAction';
import trainingSelector from '../../../../redux/selectors/trainingSelector';
import BookListItem from '../item/BookListItem';
import AddTrainingBtn from '../../trainingBtn/AddTrainingBtn';

const DescBookList = ({ books, onHandleDeleteBook }) => {
    const dispatch = useDispatch();

    // const books = useSelector(trainingSelector.trainingBooksList);

    // const onHandleDeleteBook = e => {
    //     const { id } = e.currentTarget.dataset;
    //     dispatch(trainingActions.removeBookFromTraining(id));
    // };

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
        </DescBookListStyle>
    );
};

export default DescBookList;

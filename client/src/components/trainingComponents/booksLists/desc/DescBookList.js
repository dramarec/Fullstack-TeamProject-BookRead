import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DescBookListStyle from './DescBookListStyle';
import trainingActions from '../../../../redux/actions/trainingAction';
import trainingSelector from '../../../../redux/selectors/trainingSelector';
import BookListItem from '../item/BookListItem';
import AddTrainingBtn from '../../trainingBtn/AddTrainingBtn';
import book from '../../../../assets/svg/book3.svg';

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
                <div className="books-titles__list">
                    <p>Назва книги</p>
                    <p>Автор</p>
                    <p>Рік</p>
                    <p>Стор.</p>
                </div>
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

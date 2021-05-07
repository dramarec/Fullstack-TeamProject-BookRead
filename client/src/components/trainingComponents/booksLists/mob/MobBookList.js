import React from 'react';
import { useSelector } from 'react-redux';
import book from '../../../../assets/svg/book3.svg';
import trainingSelector from '../../../../redux/selectors/trainingSelector';
import MobBookItem from './MobBookItem';
import MobBookListStyle from './MobBookListStyle';

const MobBookList = ({ books, onHandleDeleteBook }) => {
    const booksList = useSelector(trainingSelector.trainingBooksList);

    return (
        <MobBookListStyle>
            {books?.length > 0 || booksList.length > 0 ? (
                <ul className="books">
                    {booksList.length > 0
                        ? booksList.map(book => (
                              <MobBookItem
                                  key={book._id}
                                  {...book}
                                  onDeleteBook={onHandleDeleteBook}
                              />
                          ))
                        : books.map(book => (
                              <MobBookItem
                                  key={book._id}
                                  {...book}
                                  onDeleteBook={onHandleDeleteBook}
                              />
                          ))}
                </ul>
            ) : (
                <ul className="books">
                    <li>
                        <img className="books__img" src={book} alt="" />
                        <span className="books__item-descr">...</span>
                    </li>
                    <li>
                        <p className="books__item">Автор:</p>
                        <span className="books__item-descr">...</span>
                    </li>
                    <li>
                        <p className="books__item">Рік:</p>
                        <span className="books__item-descr">...</span>
                    </li>
                    <li>
                        <p className="books__item">Стор.:</p>
                        <span className="books__item-descr">...</span>
                    </li>
                </ul>
            )}
        </MobBookListStyle>
    );
};
export default MobBookList;

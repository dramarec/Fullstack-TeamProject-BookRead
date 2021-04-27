import React from 'react';
import { useSelector } from 'react-redux';
import book from '../../../../assets/svg/book3.svg';
import card from '../../../../assets/svg/card.svg';
import DescBookListStyle from './DescBookListStyle';
import trainingBooks from '../../../../redux/selectors/trainingSelector';

const DescBookList = () => {
    // const [state] = useState([...initialstate]);
    // const selector = useSelector();

    const books = useSelector(trainingBooks);
    console.log('DescBookList ===> books', books);

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
                    {books.map(
                        ({ _id, title, author, year, numberOfPages }) => (
                            <li key={_id} className="books-library__item">
                                <img
                                    className="books-library__img"
                                    src={book}
                                    alt=""
                                />
                                <p className="books-library__title">{title}</p>
                                <p className="books-library__author">
                                    {author}
                                </p>
                                <p className="books-library__year">{year}</p>
                                <p className="books-library__page">
                                    {numberOfPages}
                                </p>
                                <img
                                    className="books-library__card"
                                    src={card}
                                    alt=""
                                />
                            </li>
                        ),
                    )}
                </ul>
            </div>
            <div>
                <button className="bookFormBtn">Почати тренування</button>
            </div>
        </DescBookListStyle>
    );
};

export default DescBookList;

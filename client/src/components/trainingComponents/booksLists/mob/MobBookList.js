import React from 'react';
import book from '../../../../assets/svg/book3.svg';
import MobBookItem from './MobBookItem';
import MobBookListStyle from './MobBookListStyle';

const MobBookList = ({ books }) => {
    console.log(`books`, books);
    return (
        <MobBookListStyle>
            {books.length > 0 ? (
                <ul className="books">
                    {books.map(book => (
                        <MobBookItem key={book._id} {...book} />
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

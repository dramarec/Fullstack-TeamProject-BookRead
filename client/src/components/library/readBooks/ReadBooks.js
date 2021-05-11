import React from 'react';
import { useSelector } from 'react-redux';
import ReadBookItem from './ReadBookItem';
import ReadBookItemMobile from './ReadBookItemMobile';
import ReadBooksStyled from './ReadBooksStyled';
import Responsive from 'react-responsive';
import { getFinishRead } from '../../../redux/selectors/bookSelector';

const ReadBooks = (/*{ bookFinished }*/) => {
    const Tablet = props => <Responsive {...props} minWidth={768} />;
    const Mobile = props => <Responsive {...props} maxWidth={767} />;
    const bookFinished = useSelector(getFinishRead);
    console.log('ReadBooks ===> bookFinished', bookFinished);
    return (
        <ReadBooksStyled className="readBooksStyled container">
            <Tablet>
                <h2>Прочитано</h2>
                <div className="table-title">
                    <p>Назва книги</p>
                    <p>Автор</p>
                    <p>Рік</p>
                    <p>Стор.</p>
                    <p>Рейтинг книги</p>
                </div>
                <ul>
                    {bookFinished.map(book => (
                        <ReadBookItem key={book._id} item={book} />
                    ))}
                </ul>
            </Tablet>
            <Mobile>
                <div className="readMobil">
                    <h2>Прочитано</h2>
                    <ul>
                        {bookFinished.map(book => (
                            <ReadBookItemMobile key={book._id} item={book} />
                        ))}
                    </ul>
                </div>
            </Mobile>
        </ReadBooksStyled>
    );
};

export default ReadBooks;

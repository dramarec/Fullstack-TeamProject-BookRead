import React from 'react';
import ReadBookItem from './ReadBookItem';
import ReadBookItemMobile from './ReadBookItemMobile';
import ReadBooksStyled from './ReadBooksStyled';
import Responsive from 'react-responsive';

const ReadBooks = ({ bookFinished }) => {
    console.log('ReadBooks ===> bookFinished', bookFinished);
    const Tablet = props => <Responsive {...props} minWidth={768} />;
    const Mobile = props => <Responsive {...props} maxWidth={767} />;
    return (
        <ReadBooksStyled className="container">
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

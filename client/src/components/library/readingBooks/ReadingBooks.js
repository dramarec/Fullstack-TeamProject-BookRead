import React from 'react';
import ReadingBookItem from './ReadingBookItem';
import ReadBookItemMobile from './ReadingBookItemMobile';
import ReadingBooksStyled from './ReadingBooksStyled';
import Responsive from 'react-responsive';

const ReadingBooks = ({ bookNowRead }) => {
    console.log('ReadingBooks ===> bookNowRead', bookNowRead);
    //const  nowArray = useSelector(librarySelector.getUsersreadNow);
    //console.log(now);
    const Tablet = props => <Responsive {...props} minWidth={768} />;
    const Mobile = props => <Responsive {...props} maxWidth={767} />;
    return (
        <ReadingBooksStyled className="container">
            <h2>Читаю</h2>
            <Tablet>
                <div className="table-title">
                    <p>Назва книги</p>
                    <p>Автор</p>
                    <p>Рік</p>
                    <p>Стор.</p>
                </div>
                <ul>
                    {bookNowRead.map(book => (
                        <ReadingBookItem key={book._id} item={book} />
                    ))}
                </ul>
            </Tablet>
            <Mobile>
                <ReadBookItemMobile />
            </Mobile>
        </ReadingBooksStyled>
    );
};

export default ReadingBooks;

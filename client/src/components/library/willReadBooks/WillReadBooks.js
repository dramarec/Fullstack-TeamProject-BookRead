import React from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import WillReadBookItem from './WillReadBookItem';
import WillReadBooksStyled from './WillReadBooksStyled';
import Responsive from 'react-responsive';
import WillReadBookItemMobile from './WillReadBookItemMobile';
import { getWillRead } from '../../../redux/selectors/bookSelector';

const WillReadBooks = () => {
    const booksWillRead = useSelector(getWillRead);
    // console.log('WillReadBooks ===> booksWillRead', booksWillRead);

    const Tablet = props => <Responsive {...props} minWidth={768} />;
    const Mobile = props => <Responsive {...props} maxWidth={767} />;
    return (
        <WillReadBooksStyled className="willReadBooksStyled  container">
            <Tablet>
                <h2>Маю намір прочитати</h2>
                <div className="table-title">
                    <p>Назва книги</p>
                    <p>Автор</p>
                    <p>Рік</p>
                    <p>Стор.</p>
                </div>
                <ul>
                    {booksWillRead.map(item => (
                        <WillReadBookItem book={item} key={item.id} />
                    ))}
                </ul>
            </Tablet>
            <Mobile>
                <div className="willReadMobil">
                    <h2>Маю намір прочитати</h2>
                    <ul>
                        {booksWillRead.map(item => (
                            <WillReadBookItemMobile book={item} key={item.id} />
                        ))}
                    </ul>
                </div>
            </Mobile>
        </WillReadBooksStyled>
    );
};

export default WillReadBooks;

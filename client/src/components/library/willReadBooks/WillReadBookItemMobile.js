import book3 from '../../../assets/svg/book3.svg';
import ReadBookItemMobileStyled from '../readBooks/ReadBookItemMobileStyled';

const WillReadBookItemMobile = ({ book }) => {
    return (
        <ReadBookItemMobileStyled>
            <div className="bookName flex">
                <img src={book3} alt="" />
                <p>{book.title}</p>
            </div>
            <div className="author flex">
                <p className="title">Автор:</p>
                <p className="text">{book.author}</p>
            </div>
            <div className="publishYear flex">
                <p className="title">Рік:</p>
                <p className="text">{book.year}</p>
            </div>
            <div className="pages flex">
                <p className="title">Стор.:</p>
                <p className="text">{book.numberOfPages}</p>
            </div>
        </ReadBookItemMobileStyled>
    );
};

export default WillReadBookItemMobile;

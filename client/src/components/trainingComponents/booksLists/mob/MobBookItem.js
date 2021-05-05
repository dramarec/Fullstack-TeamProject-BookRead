import book from '../../../../assets/svg/book3.svg';
import card from '../../../../assets/svg/card.svg';

const MobBookItem = ({
    _id,
    title,
    author,
    year,
    numberOfPages,
    onDeleteBook,
}) => {
    return (
        <>
            <li key={_id}>
                <img className="books__img" src={book} alt="" />
                <span className="books__item-descr">{title}</span>

                <p className="books__item">
                    Автор:
                    <span className="books__item-descr">{author}</span>
                </p>

                <p className="books__item">
                    Рік:
                    <span className="books__item-descr">{year}</span>
                </p>

                <p className="books__item">
                    Стор.:
                    <span className="books__item-descr">{numberOfPages}</span>
                </p>
                <button
                    className="books-library__card"
                    type="button"
                    data-id={_id}
                    onClick={onDeleteBook}
                >
                    <img src={card} alt="" />
                </button>
            </li>
        </>
    );
};

export default MobBookItem;

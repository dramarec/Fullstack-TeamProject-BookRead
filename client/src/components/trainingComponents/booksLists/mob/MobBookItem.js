import { useSelector } from 'react-redux';
import { getTraining } from '../../../../redux/selectors/bookSelector';
import readingBook from '../../../../assets/svg/book3.svg';
import readBook from '../../../../assets/svg/bookOrg.svg';
import card from '../../../../assets/svg/card.svg';
import trainingOperation from '../../../../redux/operations/trainingOperation';

const MobBookItem = ({
    _id,
    title,
    author,
    year,
    numberOfPages,
    onDeleteBook,
}) => {
    const isTraining = useSelector(getTraining);
    const book = useSelector(state => state.training.book);

    return (
        <>
            <li
                key={_id}
                className={book?.readPages === numberOfPages ? 'readItem' : ''}
            >
                <div className="helpers">
                    <div className="helpers1">
                        <img
                            className="books__img"
                            src={
                                book?.readPages === numberOfPages
                                    ? readBook
                                    : readingBook
                            }
                            alt=""
                        />
                        <span className="books__item-descr">{title}</span>
                    </div>

                    {isTraining.duration === 0 && (
                        <button
                            className="books-library__card"
                            type="button"
                            data-id={_id}
                            onClick={onDeleteBook}
                        >
                            <img src={card} alt="" width="14px" height="18" />
                        </button>
                    )}
                </div>

                <div>
                    <p className="books__item">Автор:</p>
                    <span className="books__item-descr">{author}</span>
                </div>

                <div>
                    <p className="books__item">Рік:</p>
                    <span className="books__item-descr">{year}</span>
                </div>

                <div>
                    <p className="books__item">Стор.:</p>
                    <span className="books__item-descr">{numberOfPages}</span>
                </div>
            </li>
        </>
    );
};

export default MobBookItem;

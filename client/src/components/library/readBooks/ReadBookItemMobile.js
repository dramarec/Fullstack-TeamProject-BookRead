import { useState } from 'react';
import { useSelector } from 'react-redux';
import StarRatings from 'react-star-ratings';
import Modal from '../../modal/Modal';
import ReviewModal from '../reviewModal/ReviewModal';
import { getFinishRead } from '../../../redux/selectors/bookSelector';
import book from '../../../assets/svg/book.svg';
import ReadBookItemMobileStyled from './ReadBookItemMobileStyled';

const ReadingBookItemMobile = ({ item }) => {
    const [data, setData] = useState({});
    const [isOpen, setisOpen] = useState(false);
    const finishBooks = useSelector(getFinishRead);

    const handleClick = e => {
        const id = e.target.id;
        console.log(id);
        setData(finishBooks.find(book => book._id === id));
        setisOpen(true);
    };
    const closeModal = () => {
        setisOpen(false);
    };
    return (
        <>
            <ReadBookItemMobileStyled isReview={item.review}>
                <div className="bookName flex">
                    <img src={book} alt="" />
                    <p>{item.title}</p>
                </div>
                <div className="author flex">
                    <p className="title">Автор:</p>
                    <p className="text">{item.author}</p>
                </div>
                <div className="publishYear flex">
                    <p className="title">Рік:</p>
                    <p className="text">{item.year}</p>
                </div>
                <div className="pages flex">
                    <p className="title">Стор.:</p>
                    <p className="text">{item.numberOfPages}</p>
                </div>
                <div className="review flex">
                    <p className="title">Рейтинг:</p>
                    <StarRatings
                        rating={item.rating}
                        starRatedColor="#FF6B08"
                        starEmptyColor="white"
                        starSpacing="1px"
                        starDimension="17px"
                        numberOfStars={5}
                        name="rating"
                    />
                </div>
                <button
                    type="button"
                    className="review-button"
                    id={item._id}
                    onClick={handleClick}
                >
                    Резюме
                </button>
            </ReadBookItemMobileStyled>
            {isOpen && (
                <Modal closeModal={closeModal}>
                    <ReviewModal closeModal={closeModal} data={data} />
                </Modal>
            )}
        </>
    );
};

export default ReadingBookItemMobile;

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import StarRatings from 'react-star-ratings';
import Modal from '../../modal/Modal';
import ReviewModal from '../reviewModal/ReviewModal';
import { getFinishRead } from '../../../redux/selectors/bookSelector';
import book from '../../../assets/svg/book.svg';
import ReadBookItemStyled from './ReadBookItemStyled';

const ReadBookItem = ({ item }) => {
    const [data, setData] = useState({});
    const [isOpen, setisOpen] = useState(false);
    const finishBooks = useSelector(getFinishRead);

    const handleClick = e => {
        const id = e.target.id;
        setData(finishBooks.find(book => book._id === id));
        setisOpen(true);
    };
    const closeModal = () => {
        setisOpen(false);
    };
    return (
        <>
            <ReadBookItemStyled
                className="readBookItemStyled"
                isReview={!item.review}
            >
                <div className="bookName">
                    <img src={book} alt="" />
                    <p>{item.title}</p>
                </div>
                <p className="author">{item.author}</p>
                <p className="publishYear">{item.year}</p>
                <p className="pages">{item.numberOfPages}</p>
                <div className="review">
                    <StarRatings
                        rating={item.rating}
                        starRatedColor="#FF6B08"
                        starEmptyColor="white"
                        starSpacing="1px"
                        starDimension="17px"
                        numberOfStars={5}
                        name="rating"
                    />
                    <button
                        type="button"
                        className="review-button"
                        id={item._id}
                        onClick={handleClick}
                    >
                        Резюме
                    </button>
                </div>
            </ReadBookItemStyled>
            {isOpen && (
                <Modal closeModal={closeModal}>
                    <ReviewModal closeModal={closeModal} data={data} />
                </Modal>
            )}
        </>
    );
};

export default ReadBookItem;

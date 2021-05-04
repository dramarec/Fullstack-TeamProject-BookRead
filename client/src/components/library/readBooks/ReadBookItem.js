import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import book from '../../../assets/svg/book.svg';
import Modal from '../../modal/Modal';
import ReviewModal from '../reviewModal/ReviewModal';
import ReadBookItemStyled from './ReadBookItemStyled';
import { getFinishRead } from '../../../redux/selectors/bookSelector';
import StarRatings from 'react-star-ratings';

const ReadBookItem = ({ item }) => {
    // console.log('readbook', item);
    const dispatch = useDispatch();
    const [data, setData] = useState({});
    const [isOpen, setisOpen] = useState(false);
    const finishBooks = useSelector(getFinishRead);

    const handleClick = e => {
        const id = e.target.id;
        // console.log(id);
        setData(finishBooks.find(book => book._id === id));
        setisOpen(true);
        /*dispatch(modalActions.toggleModal());
    document.body.style.overflow = 'visible';*/
    };
    const closeModal = () => {
        setisOpen(false);
    };
    return (
        <>
            <ReadBookItemStyled>
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

//<Modal openModal={openModal}/>
//{isOpen && <ReviewModal data={data} />}

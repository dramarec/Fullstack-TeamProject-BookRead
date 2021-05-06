/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';
import { useDispatch /*useSelector*/ } from 'react-redux';
import { changeBookOperation } from '../../../redux/operations/bookOperation';
import ReviewModalStyled from './ReviewModalStyled';
import StarRatings from 'react-star-ratings';

const initialState = {
    review: '',
    rating: null,
};

const ReviewModal = ({ data, closeModal }) => {
    const dispatch = useDispatch();
    const [book, setBook] = useState({ ...data, ...initialState });
    const [rating, setRating] = useState();
    // console.log(rating);

    const onHandleChange = e => {
        const { name, value } = e.target;
        //setReview((prev) => ({...prev, [name]: value}))
        setBook({ ...book, [name]: value });
    };
    const onHandleSubmit = e => {
        e.preventDefault();
        dispatch(
            changeBookOperation(book._id, {
                review: book.review,
                rating: rating,
            }),
        );
        setBook({ ...data, ...initialState });
    };
    const changeRating = newRating => {
        setRating(newRating);
    };

    return (
        <ReviewModalStyled onSubmit={onHandleSubmit}>
            <p>Обрати рейтинг книги</p>
            <StarRatings
                rating={rating}
                starRatedColor="#FF6B08"
                starEmptyColor="white"
                starSpacing="1px"
                changeRating={changeRating}
                starDimension="17px"
                numberOfStars={5}
                name="rating"
            />
            <p>Резюме</p>
            <textarea
                className="form-control"
                rows="5"
                type="textarea"
                name="review"
                value={book.review}
                onChange={onHandleChange}
            />
            <div className="button-group">
                <button
                    type="button"
                    className="secondButton"
                    onClick={closeModal}
                >
                    Назад
                </button>
                <button type="submit" className="mainButton">
                    Зберегти
                </button>
            </div>

            <StarRatings
                style="fill:blue; width: 17px"
                rating={rating}
                starSpacing="5px"
                starRatedColor="#FF6B08"
                starEmptyColor="white"
                starSpacing="1px"
                changeRating={changeRating}
                starDimension="17px"
                numberOfStars={5}
                name="rating"
            />
            <p>Резюме</p>
            <textarea
                className="form-control"
                rows="5"
                type="textarea"
                name="review"
                value={book.review}
                onChange={onHandleChange}
            />
            <div className="button-group">
                <button
                    type="button"
                    className="secondButton"
                    onClick={closeModal}
                >
                    Назад
                </button>
                <button type="submit" className="mainButton">
                    Зберегти
                </button>
            </div>
        </ReviewModalStyled>
    );
};

export default ReviewModal;

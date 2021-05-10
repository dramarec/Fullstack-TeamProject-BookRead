/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    const [showError, setShowError] = useState(false);
    //const err = useSelector(state=>state.errors)
    console.log('showError', showError);

    const onHandleChange = e => {
        const { name, value } = e.target;
        //setReview((prev) => ({...prev, [name]: value}))
        // if (value === "") {setError(true)}else
        setBook({ ...book, [name]: value });
    };
    const onHandleSubmit = e => {
        e.preventDefault();
        if (!book.review) {
            return setShowError(true);
        } //{alert('No')}//{setShowError(true)}
        console.log('book.review', book.review);
        console.log('ERROR', showError);
        dispatch(
            changeBookOperation(book._id, {
                review: book.review,
                rating: rating,
            }),
        );
        setBook({ ...data, ...initialState });
    };
    console.log('ERROR1', showError);
    const changeRating = newRating => {
        setRating(newRating);
    };
    //console.log(data);
    return (
        <ReviewModalStyled onSubmit={onHandleSubmit}>
            {!data.review && (
                <>
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
                </>
            )}
            {!data.review /* ? 
            <textarea className="form-control" rows="0" type="textarea" name="review" value={book.review} onChange={onHandleChange} /> :*/ && (
                <textarea
                    className="form-control"
                    rows="5"
                    type="textarea"
                    name="review"
                    value={book.review}
                    onChange={onHandleChange}
                />
            )}
            {showError && <p className="review-error">Не може бути порожнім</p>}
            {data.review && <p className="current-resume">{data.review}</p>}
            <div className="button-group">
                <button
                    type="button"
                    className="secondButton"
                    onClick={closeModal}
                >
                    Назад
                </button>
                {!data.review /*?
          <button type='submit' className='mainButton' >Change</button> :*/ && (
                    <button type="submit" className="mainButton">
                        Зберегти
                    </button>
                )}
            </div>
        </ReviewModalStyled>
    );
};
export default ReviewModal;

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
const ReviewModal = ({data, closeModal}) => {
const dispatch = useDispatch()
const [book, setBook] = useState({...data, ...initialState })
  const [rating, setRating] = useState()
  const [error, setError] = useState(false)
const err = useSelector(state=>state.errors)
console.log(err);

  const onHandleChange = (e) => {
       const {name, value} = e.target
       //setReview((prev) => ({...prev, [name]: value}))
     // if (value==="") {setError(true) }else
       setBook({...book, [name]: value})
    } 
    const onHandleSubmit = (e) => {
        e.preventDefault();
      dispatch(changeBookOperation(book._id, { review: book.review, rating: rating }))
      if (!book.review ) {setError(true) }
      console.log('book.review', book.review);
    setBook({...data, ...initialState})

  }
  
    const changeRating = ( newRating ) =>{
     setRating(newRating)
      }
    //console.log(data);
    return (
        <ReviewModalStyled  onSubmit={onHandleSubmit} >
        <p>Обрати рейтинг книги</p> 
        <StarRatings 
        rating={rating}
        starRatedColor="#FF6B08"
        starEmptyColor="white"
        starSpacing="1px"
        changeRating={changeRating}
        starDimension="17px"
        numberOfStars={5}
        name='rating'
        />
        <p>Резюме</p>
        {
          data.review ? 
            <textarea className="form-control" rows="2" type="textarea" name="review" value={book.review} onChange={onHandleChange} /> :
             <textarea className="form-control" rows="5" type="textarea" name="review" value={book.review} onChange={onHandleChange} />
        }
        {error && <p className='review-error'>Не може бути порожнім</p>}
        {data.review && <p className='current-resume'>{data.review}</p>}
           <div className='button-group'>
          <button type='button' className='secondButton' onClick={closeModal}>Назад</button>
           {data.review ?
          <button type='submit' className='mainButton' >Change</button> :
           <button type='submit' className='mainButton' >Зберегти</button>}
           </div>
        </ReviewModalStyled>
    )
}
export default ReviewModal;
         
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeBookOperation } from '../../../redux/operations/userLibraryOperation';
import Star from '../readBooks/Star'
import ReviewModalStyled from './ReviewModalStyled'

const initialState = {
    review: "",
    rating: null,
  };
const ReviewModal = ({id, handleClick}) => {
const dispatch = useDispatch()
   const [book, setBook] = useState({...initialState})

  const onHandleChange = (e) => {
       const {name, value} = e.target
       //console.log(book);
       setBook((prev) => ({...prev, [name]: value}))
   }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        console.log(book);
        dispatch(changeBookOperation(book))

    }
    return (
        <ReviewModalStyled id={book.id} onSubmit={onHandleSubmit}>
           <p>Обрати рейтинг книги</p> 
           <Star value={book.rating}/>
           <p>Резюме</p>
           <textarea className="form-control" rows="5" type="textarea" name="review" value={book.review} onChange={onHandleChange}/>
           <div className='button-group'>
           <button type='button' className='secondButton' onClick={handleClick}>Назад</button>
           <button type='submit'  className='mainButton' onSubmit={onHandleSubmit}>Зберегти</button>
           </div>
        </ReviewModalStyled>
    )
}

export default ReviewModal

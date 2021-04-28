// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { changeBookOperation } from '../../../redux/operations/bookOperation';
// import Star from '../readBooks/Star'
// import ReviewModalStyled from './ReviewModalStyled'

// /*const initialState = {
//     review: "",
//     rating2: null,
//   };*/
// const ReviewModal = ({data, handleClick}) => {
// const dispatch = useDispatch()
// const [book, setBook] = useState({...data, /*...initialState*/})

// console.log('book1',book);

//   const onHandleChange = (e) => {
//        const {name, value} = e.target
//        //console.log(book);
//        setBook((prev) => ({...prev, [name]: value}))
//    }
//     const onHandleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(changeBookOperation(book))
//         //console.log('book',book);

//     }
//     return (
//         <ReviewModalStyled  >
//            <p>Обрати рейтинг книги</p>
//            <Star />
//            <p>Резюме</p>
//            <textarea className="form-control" rows="5" type="textarea" name="review" value={book.review} onChange={onHandleChange}/>
//            <div className='button-group'>
//            <button type='button' className='secondButton' onClick={handleClick}>Назад</button>
//            <button type='submit'  className='mainButton' onSubmit={onHandleSubmit}>Зберегти</button>
//            </div>
//         </ReviewModalStyled>
//     )
// }

// export default ReviewModal

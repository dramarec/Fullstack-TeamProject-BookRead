import React from 'react'
import Star from '../readBooks/Star'
import ReviewModalStyled from './ReviewModalStyled'

const ReviewModal = ({handleClick}) => {
    return (
        <ReviewModalStyled>
           <p>Обрати рейтинг книги</p> 
           <Star/>
           <p>Резюме</p>
           <textarea class="form-control" rows="5" ></textarea>
           <div className='button-group'>
           <button type='button' className='secondButton' onClick={handleClick}>Назад</button>
           <button type='button' className='mainButton'>Зберегти</button>
           </div>
        </ReviewModalStyled>
    )
}

export default ReviewModal

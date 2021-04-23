import React from 'react'
import Star from '../readBooks/Star'
import ReviewModalStyled from './ReviewModalStyled'

const ReviewModal = () => {
    return (
        <ReviewModalStyled>
           <p>Обрати рейтинг книги</p> 
           <Star/>
           <p>Резюме</p>
           <textarea class="form-control" rows="5" ></textarea>
           <div className='button-group'>
           <button className='secondButton'>Назад</button>
           <button className='mainButton'>Зберегти</button>
           </div>
        </ReviewModalStyled>
    )
}

export default ReviewModal

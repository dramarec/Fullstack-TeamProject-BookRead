import React from 'react'
import star from '../../../assets/img/star.png'
import book from '../../../assets/svg/book.svg'
import ReadBookItemStyled from './ReadBookItemStyled';
import Star from './Star';

const ReadBookItem = () => {
    return (
        <ReadBookItemStyled >
        <div className='bookName'>
        <img src={book} alt=''/>
        <p>Психбольница в руках пациентов...</p>
        </div>
        <p className='author'>Купер Алан</p>
        <p className='publishYear'>2009</p>
        <p className='pages'>183</p>
        <div className='review'>
        <Star/>
        <button type='button'>Резюме</button>
        </div>
        </ReadBookItemStyled>
        
       
    )
}

export default ReadBookItem
        /*<div className='star'>
        <img src={star} alt=''/>
        <img src={star} alt=''/>
        <img src={star} alt=''/>
        <img src={star} alt=''/>
        <img src={star} alt=''/>
        </div>*/
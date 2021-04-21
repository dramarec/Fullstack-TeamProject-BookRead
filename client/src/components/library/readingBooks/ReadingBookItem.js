import React from 'react'
import bookOrg from '../../../assets/svg/bookOrg.svg'
import ReadingBookItemStyled from './ReadingBookItemStyled';

const ReadingBookItem = () => {
    return (
        <ReadingBookItemStyled>
        <div className='bookName'>
        <img src={bookOrg} alt=''/>
        <p>Разработка ценностных предложений.</p>
        </div>
        <p className='author'>Алекс Остервальдер, Ив Пинье</p>
        <p className='publishYear'>2013</p>
        <p className='pages'>368</p>
    
        </ReadingBookItemStyled>
       
    )
}

export default ReadingBookItem
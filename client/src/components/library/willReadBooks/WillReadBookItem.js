import React from 'react'
import book3 from '../../../assets/svg/book3.svg'
import WillReadBookItemStyled from './WillReadBookItemStyled';

const WillReadBookItem = () => {
    return (
        <WillReadBookItemStyled>
        <div className='bookName'>
        <img src={book3} alt=''/>
        <p>Разработка ценностных предложений.</p>
        </div>
        <p className='author'>Алекс Остервальдер, Ив Пинье</p>
        <p className='publishYear'>2013</p>
        <p className='pages'>368</p>
    
        </WillReadBookItemStyled>
       
    )
}

export default WillReadBookItem
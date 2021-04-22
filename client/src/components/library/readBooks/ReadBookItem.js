import React, { useState } from 'react'

import book from '../../../assets/svg/book.svg'
import Modal from '../../modal/Modal';
import ReadBookItemStyled from './ReadBookItemStyled';
import Star from './Star';

const ReadBookItem = () => {
    const [openModal, setOpenModal] = useState(false);
    const toggaleModal = () => {
        setOpenModal(!openModal)
    }
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
        {openModal && <Modal/>}
        <button type='button' onClick={toggaleModal}>Резюме</button>
        </div>
        </ReadBookItemStyled>
        
        
        )
    }
    
    export default ReadBookItem
    
    //<Modal openModal={openModal}/>
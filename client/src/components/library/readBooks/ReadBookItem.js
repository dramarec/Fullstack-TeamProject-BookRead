import React from 'react';
import { useDispatch } from 'react-redux';
import book from '../../../assets/svg/book.svg';
import modalActions from '../../../redux/actions/modalAction';
import Modal from '../../modal/Modal';
import ReviewModal from '../reviewModal/ReviewModal';
import ReadBookItemStyled from './ReadBookItemStyled';
import Star from './Star';

const ReadBookItem = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(modalActions.toggleModal());
        document.body.style.overflow = 'visible';
    };
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
        <button type='button' className='review-button' onClick={handleClick}>Резюме</button>
        <Modal><ReviewModal handleClick={handleClick}/></Modal>
        </div>
        </ReadBookItemStyled>
        
        
        )
    }
    
    export default ReadBookItem
    
    //<Modal openModal={openModal}/>
import book from '../../../assets/svg/book.svg'
import ReadBookItemMobileStyled from './ReadBookItemMobileStyled';
import Star from './Star';
import modalActions from '../../../redux/actions/modalAction';
import { useDispatch } from 'react-redux';
import Modal from '../../modal/Modal';
import ReviewModal from '../reviewModal/ReviewModal';

const ReadingBookItemMobile = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(modalActions.toggleModal());
        document.body.style.overflow = 'visible';
    };
    return (
        <ReadBookItemMobileStyled>
        <div className='bookName flex'>
        <img src={book} alt=''/>
        <p>Психбольница в руках пациентов...</p>
        </div>
        <div className='author flex'>
        <p className='title'>Автор:</p>
        <p className='text'>Купер Алан</p>
        </div>
        <div className='publishYear flex'>
        <p className='title'>Рік:</p>
        <p className='text'>2009</p>
        </div>
        <div className='pages flex'>
        <p className='title'>Стор.:</p>
        <p className='text'>183</p>
        </div>
        <div className='review flex'>
        <p className='title'>Рейтинг:</p>
        <Star/>
        </div>
        <button type='button' className='review-button' onClick={handleClick}>Резюме</button>
        <Modal><ReviewModal handleClick={handleClick}/></Modal>
        </ReadBookItemMobileStyled>
       
    )
}

export default ReadingBookItemMobile
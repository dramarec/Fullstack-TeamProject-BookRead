import star from '../../../assets/img/star.png'
import book from '../../../assets/svg/book.svg'
import ReadBookItemMobileStyled from './ReadBookItemMobileStyled';
import Star from './Star';

const ReadingBookItemMobile = () => {
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
        <button type='button'>Резюме</button>
        </ReadBookItemMobileStyled>
       
    )
}

export default ReadingBookItemMobile
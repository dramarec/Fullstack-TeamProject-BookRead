import bookOrg from '../../../assets/svg/bookOrg.svg'
import ReadBookItemMobileStyled from './ReadingBookItemMobileStyled';

const ReadBookItemMobile = () => {
    return (
        <ReadBookItemMobileStyled>
        <div className='bookName flex'>
        <img src={bookOrg} alt=''/>
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
        </ReadBookItemMobileStyled>
       
    )
}

export default ReadBookItemMobile
import book3 from '../../../assets/svg/book3.svg'
import ReadBookItemMobileStyled from '../readBooks/ReadBookItemMobileStyled';

const WillReadBookItemMobile = () => {
    return (
        <ReadBookItemMobileStyled>
        <div className='bookName flex'>
        <img src={book3} alt=''/>
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

export default WillReadBookItemMobile
import React from 'react'
import bookOrg from '../../../assets/svg/bookOrg.svg'
import ReadingBookItemStyled from './ReadingBookItemStyled';

const ReadingBookItem = ({item}) => {
    //console.log('item', item);
    return (
        <ReadingBookItemStyled>
        <div className='bookName'>
        <img src={bookOrg} alt=''/>
        <p>{item.title}</p>
        </div>
        <p className='author'>{item.author}</p>
        <p className='publishYear'>{item.year}</p>
        <p className='pages'>{item.numberOfPages}</p>
    
        </ReadingBookItemStyled>
       
    )
}

export default ReadingBookItem
import React from 'react'
import {useState} from 'react'
import StarIcon from '../StarIcon'
import StarStyled from './StarStyled'


const Star = () => {
    const [rating, setRating] = useState(null)
    return (
            <StarStyled>
                {[...Array(5)].map((star, i) => {
                    const ratingValue= i+1;
                    return (
                    <label key={i}>
                        <input  type='radio' value={ratingValue} name='rating' onClick={()=>(setRating(ratingValue))}/>
                    <StarIcon  className='star' width={17} fill={ratingValue <= rating ? '#FF6B08' : 'white' } />
                    </label>
                    )   
                }
                )}
    
           </StarStyled>
    )
}

export default Star

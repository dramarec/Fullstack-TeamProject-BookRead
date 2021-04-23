import React from 'react'
import MyGoalStyled from './MyGoalStyled'

const MyGoal = () => {
    return (
        <MyGoalStyled className='container'>
            <p className='statistic-title'>Моя мета прочитати</p>
            <div className='statistic'>
            <div className='statistic-book'>
                <div className='statistic__cell'>
                 <span className='statistic__number'>3</span>   
                </div>
                <p className='statistic__text'>Кількість <br/> книжок</p>
            </div>
            <div className='statistic-day'>
                <div className='statistic__cell'>
                <span className='statistic__number'>28</span> 
                </div>
                <p className='statistic__text'>Кількість <br/> днів</p>
            </div>
            </div>
        </MyGoalStyled>
        
    )
}

export default MyGoal

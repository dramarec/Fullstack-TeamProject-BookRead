import React, { useState } from 'react';
import MyGoalStyled from './MyGoalStyled';

const MyGoal = () => {
    const [startTraning, setStartTraning] = useState(false);
    return (
        <MyGoalStyled startTraning={startTraning}>
            <div className="statistic-title">
                <p>Моя мета прочитати</p>
            </div>
            <div className="statistic">
                <div className="statistic-book">
                    <div className="statistic__cell">
                        <span className="statistic__number">3</span>
                    </div>
                    <p className="statistic__text">
                        Кількість <span> книжок</span>{' '}
                    </p>
                </div>
                <div className="statistic-day">
                    <div className="statistic__cell">
                        <span className="statistic__number">28</span>
                    </div>
                    <p className="statistic__text">
                        Кількість <span> днів</span>
                    </p>
                </div>
                {startTraning && (
                    <div className="statistic-reading">
                        <div className="statistic__cell">
                            <span className="statistic__number">28</span>
                        </div>
                        <p className="statistic__text">
                            Залишилось <span> книжок</span>
                        </p>
                    </div>
                )}
            </div>
        </MyGoalStyled>
    );
};

export default MyGoal;

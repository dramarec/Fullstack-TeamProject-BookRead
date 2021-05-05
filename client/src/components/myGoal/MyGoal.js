import React from 'react';
import { useSelector } from 'react-redux';
import { getTraining } from '../../redux/selectors/bookSelector';
import MyGoalStyled from './MyGoalStyled';

const MyGoal = ({ startTraining, training }) => {
    //const [startTraning, setStartTraning] = useState(false)
    //console.log('startTraining', startTraining);
    const isTraining = useSelector(getTraining);
    let bookRead = 0;
    let booksLeft;
    for (let i = 0; i < isTraining.books?.length; i++) {
        if (isTraining.books[i].numberOfPages === isTraining.books[i].readPages) {
            bookRead += 1;
        }
        booksLeft = isTraining.books.length - bookRead;
    }
    console.log('book', isTraining);
    //console.log('array', booksLeft);
    return (
        <MyGoalStyled startTraining={startTraining}>
            <div className="statistic-title">
                <p>Моя мета прочитати</p>
            </div>
            <div className="statistic">
                <div className="statistic-book">
                    <div className="statistic__cell">
                        <span className="statistic__number">
                            {isTraining.books.length}
                        </span>
                    </div>
                    <p className="statistic__text">
                        Кількість <span> книжок</span>{' '}
                    </p>
                </div>
                <div className="statistic-day">
                    <div className="statistic__cell">
                        <span className="statistic__number">
                            {isTraining.duration}
                        </span>
                    </div>
                    <p className="statistic__text">
                        Кількість <span> днів</span>
                    </p>
                </div>
                {startTraining && (
                    <div className="statistic-reading">
                        <div className="statistic__cell">
                            <span className="statistic__number">
                                {booksLeft}
                            </span>
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

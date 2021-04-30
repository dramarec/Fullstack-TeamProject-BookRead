import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TrainingPageStyled from './TrainingPageStyled';
import Chart from '../../components/trainingComponents/chart/Chart';
import MyTraining from '../../components/trainingComponents/myTraining/MyTraining';
import MobBookList from '../../components/trainingComponents/booksLists/mob/MobBookList';
import StatModal from '../../components/statModal/StatModal';
import { getUsersBooksOperetion } from '../../redux/operations/bookOperation';
import TimersSet from '../../components/timer/TimersSet';
import Result from '../../components/result/Result';
const TrainingPage = () => {
    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getUsersBooksOperetion());
    // }, []);

    return (
        <TrainingPageStyled>
            <TimersSet />
            <div className="container">
                <div className="sidebar">
                    <div className="sidebar-descr">
                        <p className="sidebar-descr__item">
                            Моя мета прочитати
                        </p>
                    </div>

                    <ul className="sidebar-wrap">
                        <li className="sidebar-wrap__list">
                            <div className="sidebar-wrap__item">
                                <span>0</span>
                            </div>
                            <p className="sidebar-wrap__description">
                                Кількість книжок
                            </p>
                        </li>
                        <li className="sidebar-wrap__list">
                            <div className="sidebar-wrap__item">
                                <span>0</span>
                            </div>
                            <p className="sidebar-wrap__description">
                                Кількість днів
                            </p>
                        </li>
                    </ul>
                </div>

                <div>
                    <MyTraining />
                    <MobBookList />
                    <Chart />
                </div>
                <Result />
            </div>

            {/* <StatModal /> */}
        </TrainingPageStyled>
    );
};
export default TrainingPage;

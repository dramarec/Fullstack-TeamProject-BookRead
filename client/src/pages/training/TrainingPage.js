import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Responsive from 'react-responsive';
import TrainingPageStyled from './TrainingPageStyled';
import Chart from '../../components/trainingComponents/chart/Chart';
import MyTraining from '../../components/trainingComponents/myTraining/MyTraining';
import MobBookList from '../../components/trainingComponents/booksLists/mob/MobBookList';
import StatModal from '../../components/statModal/StatModal';
import { getUsersBooksOperetion } from '../../redux/operations/bookOperation';
import TimersSet from '../../components/timer/TimersSet';
import authSelectors from '../../redux/selectors/authSelector';
import MyGoal from '../../components/myGoal/MyGoal';
import DescBookList from '../../components/trainingComponents/booksLists/desc/DescBookList';
import trainingSelector from '../../redux/selectors/trainingSelector';

const TrainingPage = () => {
    const dispatch = useDispatch();
    const training = useSelector(authSelectors.getUserTraining);
    const trainingBooksList = useSelector(trainingSelector.trainingBooksList);

    const Desktop = props => <Responsive {...props} minWidth={1280} />;
    const Tablet = props => <Responsive {...props} maxWidth={1279} />;
    const Mobile = props => <Responsive {...props} maxWidth={767} />;

    // useEffect(() => {
    //     dispatch(getUsersBooksOperetion());
    // }, []);

    return (
        <TrainingPageStyled className="container">
            <Desktop>
                {!training.length && <MyTraining />}
                {!training.length && <MyGoal />}
                {!training.length && <Chart />}

                <div className="leftSide">
                    {training.length && <TimersSet />}
                    {training.length && (
                        <DescBookList books={trainingBooksList} />
                    )}
                    {training.length && <Chart />}
                </div>
                <div className="rigthSide">{training.length && <MyGoal />}</div>
            </Desktop>
            <Tablet>
                {training.length && <MyGoal />}
                {training.length && <MyTraining />}
                {training.length && <Chart />}

                {!training.length && <TimersSet />}
                {!training.length && <MyGoal />}
                {!training.length && <DescBookList books={trainingBooksList} />}
                {!training.length && <Chart />}
            </Tablet>

            {/* <TimersSet />
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
            </div>

            <StatModal /> */}
        </TrainingPageStyled>
    );
};
export default TrainingPage;

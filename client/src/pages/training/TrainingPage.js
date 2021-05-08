import React, { useEffect, useState, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Responsive from 'react-responsive';
import TrainingPageStyled from './TrainingPageStyled';
import Chart from '../../components/trainingComponents/chart/Chart';
import MyTraining from '../../components/trainingComponents/myTraining/MyTraining';
import TimersSet from '../../components/timer/TimersSet';
import MyGoal from '../../components/myGoal/MyGoal';
import DescBookList from '../../components/trainingComponents/booksLists/desc/DescBookList';
import trainingSelector from '../../redux/selectors/trainingSelector';
import Result from '../../components/result/Result';
import trainingOperation from '../../redux/operations/trainingOperation';
import { getTraining } from '../../redux/selectors/bookSelector';
import MobBookList from '../../components/trainingComponents/booksLists/mob/MobBookList';
import TrainingModal from '../../components/trainingComponents/myTraining/TrainingModal';

const TrainingPage = memo(() => {
    const dispatch = useDispatch();
    const training = useSelector(state => state.auth.user.training);
    const isAuth = useSelector(state => state.auth.token);

    const isTraining = useSelector(getTraining);

    const trainingAction = async () => {
        try {
            training !== null &&
                (await dispatch(trainingOperation.getTrainingOperation()));
        } catch (err) {
            return;
        }
    };

    useEffect(() => {
        isAuth && trainingAction();
        console.log(training, 'FROM TRAINING PaGE');
        // eslint-disable-next-line
    }, []);

    const Desktop = props => <Responsive {...props} minWidth={1280} />;
    const Tablet = props => (
        <Responsive {...props} minWidth={768} maxWidth={1279} />
    );
    const Mobile = props => <Responsive {...props} maxWidth={767} />;

    return (
        <TrainingPageStyled>
            <div className="container">
                <Desktop>
                    {isTraining.duration !== 0 ? (
                        <>
                            <div className="leftSide">
                                <TimersSet />
                                <DescBookList />
                                <Chart />
                            </div>

                            <div className="rigthSide">
                                <MyGoal
                                    startTraining={isTraining.duration !== 0}
                                />
                                <Result />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="topPart">
                                <MyTraining />
                                <MyGoal
                                    startTraining={isTraining.duration !== 0}
                                />
                            </div>
                            <div className="bottomPart">
                                <Chart />
                            </div>
                        </>
                    )}
                </Desktop>
                <Tablet>
                    {isTraining.duration !== 0 ? (
                        <>
                            <TimersSet />
                            <MyGoal startTraining={isTraining.duration !== 0} />
                            <DescBookList />
                            <Chart />
                            <Result />
                        </>
                    ) : (
                        <>
                            <MyGoal startTraining={isTraining.duration !== 0} />
                            <MyTraining />
                            <Chart />
                        </>
                    )}
                </Tablet>
                <Mobile>
                    {isTraining.duration !== 0 ? (
                        <>
                            <TimersSet />
                            <MyGoal startTraining={isTraining.duration !== 0} />
                            <MobBookList />
                            <Chart />
                            <Result />
                        </>
                    ) : (
                        <>
                            <MyGoal startTraining={isTraining.duration !== 0} />
                            <TrainingModal />
                            <Chart />
                        </>
                    )}
                </Mobile>
            </div>
        </TrainingPageStyled>
    );
});
export default TrainingPage;

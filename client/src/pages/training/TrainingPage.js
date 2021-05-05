import React, { useEffect, memo } from 'react';
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

const TrainingPage = memo(() => {
    const trainingBooksList = useSelector(trainingSelector.trainingBooksList);
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
        // eslint-disable-next-line
    }, []);

    const Desktop = props => <Responsive {...props} minWidth={1280} />;
    const Tablet = props => <Responsive {...props} maxWidth={1279} />;
    //const Mobile = props => <Responsive {...props} maxWidth={767} />;

    return (
        <TrainingPageStyled className="container">
            <Tablet>
                {isTraining.duration !== 0 ? (
                    <>
                        <TimersSet />
                        <MyGoal
                            startTraining={isTraining.duration !== 0}
                            training={isTraining}
                        />
                        <DescBookList books={trainingBooksList} />
                        <Chart />
                        <Result />
                    </>
                ) : (
                    <>
                        <MyGoal
                            startTraining={isTraining.duration !== 0}
                            training={isTraining}
                        />
                        <MyTraining />
                        <Chart />
                    </>
                )}
            </Tablet>
            <Desktop>
                {isTraining.duration !== 0 ? (
                    <>
                        <div className="leftSide">
                            <TimersSet />
                            <DescBookList books={trainingBooksList} />
                            <Chart />
                        </div>

                        <div className="rigthSide">
                            <MyGoal
                                startTraining={isTraining.duration !== 0}
                                training={isTraining}
                            />
                            <Result />
                        </div>
                    </>
                ) : (
                    <>
                        <MyTraining />
                        <MyGoal
                            startTraining={isTraining.duration !== 0}
                            training={isTraining}
                        />
                        <Chart />
                    </>
                )}
            </Desktop>
        </TrainingPageStyled>
    );
});
export default TrainingPage;

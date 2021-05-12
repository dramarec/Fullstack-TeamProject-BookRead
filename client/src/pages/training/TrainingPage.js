import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import Responsive from 'react-responsive';
import Chart from '../../components/trainingComponents/chart/Chart';
import MyTraining from '../../components/trainingComponents/myTraining/MyTraining';
import TrainingModal from '../../components/trainingComponents/myTraining/TrainingModal';
import TimersSet from '../../components/timer/TimersSet';
import MyGoal from '../../components/myGoal/MyGoal';
import Result from '../../components/result/Result';
import DescBookList from '../../components/trainingComponents/booksLists/desc/DescBookList';
import MobBookList from '../../components/trainingComponents/booksLists/mob/MobBookList';
import { getTraining } from '../../redux/selectors/bookSelector';
import TrainingPageStyled from './TrainingPageStyled';

const TrainingPage = memo(() => {
    const isTraining = useSelector(getTraining);

    const Desktop = props => <Responsive {...props} minWidth={1280} />;
    const Tablet = props => (
        <Responsive {...props} minWidth={768} maxWidth={1279} />
    );
    const Mobile = props => <Responsive {...props} maxWidth={767} />;

    return (
        <TrainingPageStyled className="trainingPageStyled training">
            <div className="container containerWrap">
                <Desktop>
                    {isTraining.duration !== 0 ? (
                        <>
                            <div className="topPart1">
                                <div className="topPart2">
                                    <TimersSet />
                                    <DescBookList />
                                </div>

                                <MyGoal
                                    startTraining={isTraining.duration !== 0}
                                />
                            </div>

                            <div className="bottomPart1">
                                <Chart />
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

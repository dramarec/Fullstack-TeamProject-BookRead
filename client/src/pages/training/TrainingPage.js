import React from 'react';
import { useSelector } from 'react-redux';
import Responsive from 'react-responsive';
import TrainingPageStyled from './TrainingPageStyled';
import Chart from '../../components/trainingComponents/chart/Chart';
import MyTraining from '../../components/trainingComponents/myTraining/MyTraining';
import TimersSet from '../../components/timer/TimersSet';
import MyGoal from '../../components/myGoal/MyGoal';
import DescBookList from '../../components/trainingComponents/booksLists/desc/DescBookList';
import trainingSelector from '../../redux/selectors/trainingSelector';

const TrainingPage = () => {
    const training = useSelector(trainingSelector.getTraining);
    const trainingBooksList = useSelector(trainingSelector.trainingBooksList);

    const Desktop = props => <Responsive {...props} minWidth={1280} />;
    const Tablet = props => <Responsive {...props} maxWidth={1279} />;
    //const Mobile = props => <Responsive {...props} maxWidth={767} />;

    return (
        <TrainingPageStyled className="container">
            <Tablet>
                {!training.length && <MyGoal />}
                {!training.length && <MyTraining />}
                {!training.length && <Chart />}

                {training.length && <TimersSet />}
                {training.length && <MyGoal />}
                {training.length && <DescBookList books={trainingBooksList} />}
                {training.length && <Chart />}
            </Tablet>
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
        </TrainingPageStyled>
    );
};
export default TrainingPage;

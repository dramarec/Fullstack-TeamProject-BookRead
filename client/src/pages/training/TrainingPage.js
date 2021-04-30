import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TrainingPageStyled from './TrainingPageStyled';
import Chart from '../../components/trainingComponents/chart/Chart';
import MyTraining from '../../components/trainingComponents/myTraining/MyTraining';
import MobBookList from '../../components/trainingComponents/booksLists/mob/MobBookList';
import StatModal from '../../components/statModal/StatModal';
//import { getUsersBooksOperetion } from '../../redux/operations/bookOperation';
import TimersSet from '../../components/timer/TimersSet';
import { getTraining, getUserTraining } from '../../redux/selectors/bookSelector';
import MyGoal from '../../components/myGoal/MyGoal';
import { getUsersBooksOperetion } from '../../redux/operations/bookOperation';
import trainingOperation from '../../redux/operations/trainingOperation';

import Result from '../../components/result/Result';

const TrainingPage = () => {
    //const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getUsersBooksOperetion());
    // }, []);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(trainingOperation.getTrainingOperation());
    }, []);
    const isTraining = useSelector(getTraining)
    const isUserTraining = useSelector(getUserTraining)
    console.log('isTraining',isTraining);
    console.log('isUserTraining',isUserTraining);

    return (
        <TrainingPageStyled>
            {isTraining.duration !==0 && <TimersSet/>}
            <MyGoal startTraining={isTraining.duration !==0} training={isTraining}/>
            <div className="container">
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

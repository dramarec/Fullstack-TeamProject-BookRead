import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import trainingOperation from '../../../redux/operations/trainingOperation';
import trainingSelector from '../../../redux/selectors/trainingSelector';

const AddTrainingBtn = () => {
    const dispatch = useDispatch();
    const start = useSelector(trainingSelector.getStartDate);
    const end = useSelector(trainingSelector.getEndDate);
    const books = useSelector(trainingSelector.trainingBooksList);

    console.log('AddTrainingBtn ===> books', books);

    const onHandleAddTraining = () => {
        dispatch(
            trainingOperation.operationAddNewTraining({
                start,
                end,
                books,
            }),
        );
    };
    return (
        <div>
            <button onClick={onHandleAddTraining} className="bookFormBtn">
                Почати тренування
            </button>
        </div>
    );
};

export default AddTrainingBtn;

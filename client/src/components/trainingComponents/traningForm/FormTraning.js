import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWillRead } from '../../../redux/selectors/bookSelector';
import InputDatePicker from '../dataPicker/PickerData';
import FormTraningStyle from './FormTraningStyle';
import trainingActions from '../../../redux/actions/trainingAction';
import trainingSelector from '../../../redux/selectors/trainingSelector';
// import { DateTime } from 'luxon';
import moment from 'moment';

const FormTraning = () => {
    const dispatch = useDispatch();
    const [books, setBooks] = useState({});

    const booksWillRead = useSelector(getWillRead);
    const startDate = useSelector(trainingSelector.getStartDate);
    const endDate = useSelector(trainingSelector.getEndDate);

    const handleStartDate = date => {
        const startDate = moment(date).format('YYYY-MM-DD');
        dispatch(trainingActions.setStartDateTraining(startDate));
    };

    const handleEndDate = date => {
        const endDate = moment(date).format('YYYY-MM-DD');
        dispatch(trainingActions.setEndDateTraining(endDate));
    };

    const handleChange = e => {
        const _id = e.target.value;
        const book = booksWillRead.find(book => book._id === _id);
        setBooks({ books: book });
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(trainingActions.addBookInTraining(books, startDate, endDate));
    };

    return (
        <FormTraningStyle>
            <form onSubmit={handleSubmit} className="training-form">
                <div className="training-form__wrap">
                    <div className="training-form__pickers">
                        <InputDatePicker
                            placeholderText="Початок"
                            onChange={handleStartDate}
                            pickedDate={startDate ? new Date(startDate) : ''}
                        />

                        <InputDatePicker
                            placeholderText="Завершення"
                            onChange={handleEndDate}
                            pickedDate={endDate ? new Date(endDate) : ''}
                        />
                    </div>

                    <div className="selectwrap">
                        <select
                            className="select"
                            name="select"
                            onChange={handleChange}
                        >
                            <option value="Обрати книги з бібліотеки">
                                Обрати книги з бібліотеки
                            </option>

                            {booksWillRead.map(book => (
                                <option key={book._id} value={book._id}>
                                    {book.title}
                                </option>
                            ))}
                        </select>

                        <button type="submit" className="bookFormBtn">
                            Додати
                        </button>
                    </div>
                </div>
            </form>
        </FormTraningStyle>
    );
};

export default FormTraning;

// // const onHandleChange = (e) => {
// //   const { name, value } = e.target;
// //   setState((prev) => ({ ...prev, [name]: value }));
// // };

// const initialState = {
// firstName: "",
// lastName: "",
// stack: "HTML",
// position: "Mentor",
// };

// const TutorForm = () => {
// // const isLoading = useSelector((state) => state.tutors.isLoading);
// const [state, setState] = useState({ ...initialState });
// const dispatch = useDispatch();

// const onHandleChange = (evt) => {
//   const { name, value } = evt.target;
//   setState((prev) => ({ ...prev, [name]: value }));
// };

// const onHandleSubmit = (e) => {
//   e.preventDefault();
//   dispatch(addNew)

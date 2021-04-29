import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWillRead } from '../../../redux/selectors/bookSelector';
import InputDatePicker from '../dataPicker/PickerData';
import FormTraningStyle from './FormTraningStyle';
// import trainingActions from '../../../redux/actions/trainingAction';
// import trainingSelector from '../../../redux/selectors/trainingSelector';

import moment from 'moment';
import Select from './selectBooks/Selector';
import { useFormik } from 'formik';

const FormTraning = () => {
    // const [state, setState] = useState({
    //     start: '',
    //     end: '',
    //     books: [],
    // });
    // const dispatch = useDispatch();
    const [books, setBooks] = useState([]);
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const booksWillRead = useSelector(getWillRead);

    // const startDate = useSelector(trainingSelector.getStartDate);
    // const endDate = useSelector(trainingSelector.getEndDate);

    const formik = useFormik({
        initialValues: {
            start: '',
            end: '',
            books: [],
        },
        onSubmit: values => {
            handleSubmit(values);
        },
    });

    const handleStartDate = date => {
        const start = moment(date).format('YYYY-MM-DD');
        setStart(start);
    };
    const handleEndDate = date => {
        const end = moment(date).format('YYYY-MM-DD');
        setEnd(end);
    };

    const handleChange = e => {
        const _id = e.target.value;
        const book = booksWillRead.find(book => book._id === _id);
        setBooks({ books: book });
    };

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <FormTraningStyle>
            <form onSubmit={formik.handleSubmit} className="training-form">
                <div className="training-form__wrap">
                    <div className="training-form__pickers">
                        <InputDatePicker
                            value={formik.values.start}
                            placeholderText="Початок"
                            onChange={handleStartDate}
                            pickedDate={start ? new Date(start) : ''}
                        />
                        <InputDatePicker
                            value={formik.values.end}
                            placeholderText="Завершення"
                            onChange={handleEndDate}
                            pickedDate={end ? new Date(end) : ''}
                        />
                    </div>
                    <Select
                        value={formik.values.books}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </FormTraningStyle>
    );
};

export default FormTraning;

// const handleStartDate = date => {
//     const startDate = moment(date).format('YYYY-MM-DD');
//     dispatch(trainingActions.setStartDateTraining(startDate));
// };
// const handleEndDate = date => {
//     const endDate = moment(date).format('YYYY-MM-DD');
//     dispatch(trainingActions.setEndDateTraining(endDate));
// };

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

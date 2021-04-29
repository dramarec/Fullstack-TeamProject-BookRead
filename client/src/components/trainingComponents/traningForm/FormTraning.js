import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWillRead } from '../../../redux/selectors/bookSelector';
import InputDatePicker from '../dataPicker/PickerData';
import FormTraningStyle from './FormTraningStyle';
// import trainingActions from '../../../redux/actions/trainingAction';
// import trainingSelector from '../../../redux/selectors/trainingSelector';
import AddTrainingBtn from '../trainingBtn/AddTrainingBtn';
import moment from 'moment';
import Select from './selectBooks/Selector';
import { useFormik } from 'formik';
import trainingOperation from '../../../redux/operations/trainingOperation';
import DescBookList from '../booksLists/desc/DescBookList';
const FormTraning = () => {
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [booksArr, setBooks] = useState([]);
    const dispatch = useDispatch();
    console.log(start, 'START');
    console.log(end, 'END');
    console.log(booksArr, 'BOOK STATE!!');

    // useEffect(() => {
    //     formik.setFieldValue('start', start);
    //     formik.setFieldValue('end', end);
    // }, []);

    const formik = useFormik({
        initialValues: {
            start: '',
            end: '',
            book: {},
        },
        onSubmit: values => {
            console.log(values, 'ALERT');
            if (booksArr.some(item => item._id === values.book._id)) {
                alert('kiss my ass!');
                return;
            } else {
                setBooks(prev => [...prev, values.book]);
            }
        },
    });

    const handleStartDate = date => {
        const start = moment(date).format('YYYY-MM-DD');
        formik.setFieldValue('start', start);
        setStart(start);
    };
    const handleEndDate = date => {
        const end = moment(date).format('YYYY-MM-DD');
        formik.setFieldValue('end', end);
        setEnd(end);
    };

    const handleBook = value => {
        formik.setFieldValue('book', value);
        // console.log(value, 'BOOK!');
    };

    // const handleSubmit = e => {
    //     e.preventDefault();
    // };
    const books = booksArr.map(book => book._id);
    const onHandleAddTraining = () => {
        dispatch(
            trainingOperation.operationAddNewTraining({
                start,
                end,
                books,
            }),
        );
        // console.log(start, end, booksArr);
    };

    return (
        <FormTraningStyle>
            <form className="training-form">
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
                </div>
            </form>
            <form onSubmit={formik.handleSubmit} className="training-form">
                <div className="training-form__wrap">
                    <Select value={formik.values.book} onChange={handleBook} />
                    <button type="submit" className="bookFormBtn">
                        Додати
                    </button>
                </div>
            </form>
            <DescBookList books={booksArr} />
            <div>
                <button onClick={onHandleAddTraining} className="bookFormBtn">
                    Почати тренування
                </button>
            </div>
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

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import Select from './selectBooks/Selector';

import DescBookList from '../booksLists/desc/DescBookList';
import InputDatePicker from '../dataPicker/PickerData';
import FormTraningStyle from './FormTraningStyle';
import trainingOperation from '../../../redux/operations/trainingOperation';
import { CSSTransition } from 'react-transition-group';
import { Notif } from './Notification';

const FormTraning = () => {
    const dispatch = useDispatch();

    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [booksArr, setBooks] = useState([]);
    const [showNotif, setShowNotif] = useState(false);
    // console.log(start, 'FormTraning => START');
    // console.log(end, 'FormTraning => END');
    // console.log(booksArr, 'FormTraning => BOOK STATE!!');

    const onHandleDeleteBook = e => {
        const { id } = e.currentTarget.dataset;
        setBooks(prev => prev.filter(book => book._id !== id));
    };

    const validationSchema = Yup.object().shape({
        start: Yup.string().required('Вкажіть дату початку тренування'),
        end: Yup.string().required('Вкажіть дату завершення тренування'),
        book: Yup.object().required('Ви не обрали книжку'),
    });

    const formik = useFormik({
        initialValues: {
            start: '',
            end: '',
            book: '',
        },
        validationSchema,
        onSubmit: values => {
            if (booksArr.some(item => item._id === values.book._id)) {
                // alert('kiss my ass!');
                setShowNotif(true);
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
    };

    const books = booksArr.map(book => book._id);

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
                        {formik.touched.start && formik.errors.start ? (
                            <p className="error start">{formik.errors.start}</p>
                        ) : null}

                        <InputDatePicker
                            value={formik.values.end}
                            placeholderText="Завершення"
                            onChange={handleEndDate}
                            pickedDate={end ? new Date(end) : ''}
                        />
                        {formik.touched.end && formik.errors.end ? (
                            <p className="error end">{formik.errors.end}</p>
                        ) : null}
                    </div>
                </div>
            </form>

            <form onSubmit={formik.handleSubmit} className="training-form">
                <div className="training-form__wrap">
                    <Select value={formik.values.book} onChange={handleBook} />

                    {formik.touched.book && formik.errors.book ? (
                        <p className="error book">{formik.errors.book}</p>
                    ) : null}

                    <button type="submit" className="bookFormBtn">
                        Додати
                    </button>
                </div>
            </form>
            <CSSTransition
                in={showNotif}
                onEntered={() => setShowNotif(false)}
                timeout={2000}
                classNames="ntf"
                unmountOnExit
            >
                <Notif />
            </CSSTransition>
            <DescBookList
                onHandleDeleteBook={onHandleDeleteBook}
                books={booksArr}
            />
            {booksArr.length > 0 && (
                <div>
                    <button onClick={onHandleAddTraining} className="FormBtn">
                        Почати тренування
                    </button>
                </div>
            )}
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

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { useFormik } from 'formik';
import moment from 'moment';
import DescBookList from '../booksLists/desc/DescBookList';
import InputDatePicker from '../dataPicker/PickerData';
import { Notif } from './Notification';
import { validationSchema } from '../ValidationTrainingForm';
import trainingOperation from '../../../redux/operations/trainingOperation';
import Select from './selectBooks/Selector';
import FormTraningStyle from './FormTraningStyle';

const FormTraning = () => {
    const dispatch = useDispatch();

    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [booksArr, setBooks] = useState([]);
    const [showNotif, setShowNotif] = useState(false);

    const onHandleDeleteBook = e => {
        const { id } = e.currentTarget.dataset;
        setBooks(prev => prev.filter(book => book._id !== id));
    };

    const formik = useFormik({
        initialValues: {
            start: '',
            end: '',
            book: '',
        },
        validationSchema,
        onSubmit: values => {
            if (booksArr.some(item => item._id === values.book._id)) {
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
                <button onClick={onHandleAddTraining} className="formBtn">
                    Почати тренування
                </button>
            )}
        </FormTraningStyle>
    );
};

export default FormTraning;

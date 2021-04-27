import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewTrainingBook } from '../../../redux/actions/trainingAction';
import { getWillRead } from '../../../redux/selectors/bookSelector';
import InputDatePicker from '../dataPicker/PickerData';
import FormTraningStyle from './FormTraningStyle';

const FormTraning = () => {
    const dispatch = useDispatch();
    const [books, setBooks] = useState({});
    console.log('FormTraning ===> books', books);

    const allBooks = useSelector(getWillRead);
    console.log('FormTraning ===> allBooks', allBooks);

    const handleChange = e => {
        const _id = e.target.value;
        console.log('FormTraning ===> _id', _id);

        const book = allBooks.find(book => book._id === _id);
        console.log('FormTraning ===> book', book);

        setBooks({ books: book });
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addNewTrainingBook(books));
    };

    return (
        <FormTraningStyle>
            <form onSubmit={handleSubmit} className="training-form">
                <div className="training-form__wrap">
                    <div className="training-form__pickers">
                        <InputDatePicker />
                        <InputDatePicker />
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

                            {allBooks.map(book => (
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

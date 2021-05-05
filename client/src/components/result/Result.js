import ResultStyled from './ResultStyled';
import React from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { useFormik } from 'formik';
import * as yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';
import trainingOperation from '../../redux/operations/trainingOperation';
import Statistics from '../statistic/Statistics';


const Result = () => {
    const dispatch = useDispatch();
    const validationSchema = yup.object({
        date: yup.string().required('Виберіть дату'),
        pages: yup.number().required(`Обов'язкове поле`),
    });

    const formik = useFormik({
        initialValues: {
            date: '',
            pages: 0,
        },
        validationSchema,
        onSubmit: values => {
            patchTraining(values);
        },
    });

    const handleDateChange = date => {
        formik.setFieldValue('date', date);
    };

    const patchTraining = async values => {
        try {
            dispatch(
                trainingOperation.addReadPagesOperation({
                    date: moment(values.date).format('YYYY-MM-DD'),
                    pages: values.pages,
                }),
            );
        } catch (err) {
            return;
        }
    };

    return (
        <ResultStyled>
            <p className="resultsTitle">Результати</p>
            <form
                className="resultsForm"
                onSubmit={formik.handleSubmit}
                autoComplete="off"
            >
                <div className="formGroup">
                    <div className="inputGroup">
                        <label className="label" htmlFor="date">
                            Дата
                        </label>
                        <DatePicker
                            selected={formik.values.date}
                            onChange={handleDateChange}
                            dateFormat="d.MM.yyyy"
                            name="data"
                            placeholderText="д.мм.рррр"
                            className="formInputDate"
                            popperProps={{
                                positionFixed: true,
                            }}
                            id="date"
                        />
                        {formik.touched.date && formik.errors.date ? (
                            <span className="error ">{formik.errors.date}</span>
                        ) : null}
                    </div>
                    <div className="inputGroup">
                        <label className="label" htmlFor="pages">
                            Кількість сторінок
                        </label>
                        <input
                            type="number"
                            name="pages"
                            placeholder="..."
                            id="pages"
                            className="pagesInput"
                            onChange={formik.handleChange}
                            value={formik.values.pages}
                        />
                        {formik.touched.pages && formik.errors.pages ? (
                            <span className="error ">
                                {formik.errors.pages}
                            </span>
                        ) : null}
                    </div>
                </div>
                <button type="submit" className="formButton">
                    Додати результат
                </button>
            </form>
            <Statistics />
        </ResultStyled>
    );
};
export default Result;

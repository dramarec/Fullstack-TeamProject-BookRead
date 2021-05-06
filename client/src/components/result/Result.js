import ResultStyled from './ResultStyled';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { useFormik } from 'formik';
import * as yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';
import trainingOperation from '../../redux/operations/trainingOperation';
import trainingSelector from '../../redux/selectors/trainingSelector';
// import trainingActions from '../../redux/actions/trainingActions';
import Statistics from '../statistic/Statistics';
// import EndTrainingModal from '../endTrainingMdl/EndTrainingModal';
import Modal from '../modal/Modal';
import EndTrainingModalStyled from '../endTrainingMdl/EndTrainingModalStyled';
import { Link, useHistory } from 'react-router-dom';

const Result = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [isOpenModal, setIsOpenModal] = useState(false);
    console.log('Result ===> isOpenModal', isOpenModal);

    const totalReadPages = useSelector(trainingSelector.getTotalReadPages);
    const totalPages = useSelector(state => state.training.totalPages);
    //const result = useSelector(state => state.training.results);

    const closeModal = () => {
        setIsOpenModal(false);
        history.push('/library');
    };

    const openModal = () => {
        return setIsOpenModal(true);
    };

    if (totalReadPages === totalPages) {
        openModal();
    }
    console.log('Result ===> ', isOpenModal);

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
            // dispatch(trainingActions.addTotalReadPages(values.pages));

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

    totalReadPages === totalPages && console.log('You awesome!');

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
            {/* <EndTrainingModal /> */}
            {isOpenModal && (
                <Modal closeModal={closeModal}>
                    <EndTrainingModalStyled>
                        <img alt="" className="statModalImg" />
                        <p className="statModalTitle">Ваша тренування</p>
                        <p className="statModalTitle">закінчено!</p>

                        <Link
                            className="statModalBtn"
                            to="/training"
                            onClick={closeModal}
                        >
                            Почати нове тренування
                        </Link>
                        <Link
                            className="statModalBtn"
                            to="/library"
                            onClick={closeModal}
                        >
                            Додати нові книжки
                        </Link>
                    </EndTrainingModalStyled>
                </Modal>
            )}
        </ResultStyled>
    );
};
export default Result;

/* <ul className="statisticList"> 
            {
                result.map(item => 
                    <Statistics key={item.id} item={item} />
                    )
                }
                </ul>*/

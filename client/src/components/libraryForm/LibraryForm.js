import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Responsive from 'react-responsive';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import modalActions from '../../redux/actions/modalAction';
import { addBookOperation } from '../../redux/operations/bookOperation';
import back from '../../assets/svg/back.svg';
import LibraryFormStyled from './LibraryFormStyled';

const getYear = () => {
  return new Date().getFullYear();
};

const schema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Занадто коротка назва!')
    .required('Заповніть поле "Назва книги"'),
  author: Yup.string().required('Заповніть поле "Автор книги"'),
  year: Yup.number()
    .min(1500, 'Min значення 1500')
    .max(getYear(), 'Не більш, ніж поточний рік')
    .required('Заповніть поле "Рік випуску"')
    .typeError('Введіть число'),
  numberOfPages: Yup.number()
    .min(1, 'Min значення 1')
    .required('Заповніть поле "Кількість сторінок"')
    .typeError('Введіть число'),
});

const initialState = {
  title: '',
  author: '',
  year: '',
  numberOfPages: '',
  // onOpen: true,
};

const LibraryForm = () => {
  const dispatch = useDispatch();
  const [state /* , setState */] = useState({ ...initialState });

  const Mobile = props => <Responsive {...props} maxWidth={767} />;

  const onHandlerSubmit = values => {
    dispatch(addBookOperation(values));
    //setState({state.onOpen: false})
  };

  const onCloseModal = () => {
    dispatch(modalActions.toggleModal());
  };

  return (
    <LibraryFormStyled>
      <Mobile>
        <button className="bookFormBtnBack" onClick={onCloseModal}>
          <img src={back} alt="" />
        </button>
      </Mobile>

      <Formik
        initialValues={state}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          onHandlerSubmit({ ...values });

          actions.resetForm({ ...state });
        }}
      >
        {({ values }) => (
          <Form className="bookForm">
            <div className="bookFormList ">
              <label className="bookFormListItem">
                <span className="bookFormListItemTitle">Назва книги</span>
                <div className="wrapper">
                  <Field
                    className="bookFormInput input0"
                    type="text"
                    value={values.title}
                    name="title"
                    placeholder="..."
                    autoComplete="off"
                  />
                  <ErrorMessage
                    className="bookFormError"
                    component="div"
                    name="title"
                  />
                </div>
              </label>
              <div className="bookFormhelpers">
                <label className="bookFormListItem">
                  <span className="bookFormListItemTitle">Автор книги</span>
                  <div className="wrapper">
                    <Field
                      className="bookFormInput input1"
                      type="text"
                      value={values.author}
                      name="author"
                      placeholder="..."
                      autoComplete="off"
                    />
                    <ErrorMessage
                      className="bookFormError"
                      component="div"
                      name="author"
                    />
                  </div>
                </label>

                <label className="bookFormListItem">
                  <span className="bookFormListItemTitle">Рік випуску</span>
                  <div className="wrapper">
                    <Field
                      className="bookFormInput  input2"
                      type="number"
                      value={values.year}
                      name="year"
                      placeholder="..."
                      autoComplete="off"
                    />
                    <ErrorMessage
                      className="bookFormError"
                      component="div"
                      name="year"
                    />
                  </div>
                </label>

                <label className="bookFormListItem">
                  <span className="bookFormListItemTitle">
                    Кількість сторінок
                  </span>
                  <div className="wrapper">
                    <Field
                      className="bookFormInput input3"
                      type="number"
                      value={values.numberOfPages}
                      name="numberOfPages"
                      placeholder="..."
                      autoComplete="off"
                    />
                    <ErrorMessage
                      className="bookFormError"
                      component="div"
                      name="numberOfPages"
                    />
                  </div>
                </label>
              </div>
            </div>
            <button type="submit" className="bookFormBtn">
              Додати
            </button>
          </Form>
        )}
      </Formik>
    </LibraryFormStyled>
  );
};

export default LibraryForm;

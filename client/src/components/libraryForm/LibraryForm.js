import React, { useState } from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
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
    .min(1000, 'Повинно бути 4 символу')
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
  bookPages: '',
};

const LibraryForm = () => {
  const [state /* , setState */] = useState({ ...initialState });

  const onHandlerSubmit = values => {
    console.log(`values`, values);
  };

  return (
    <LibraryFormStyled>
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
                      type="text"
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
                      type="text"
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

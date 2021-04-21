import React, { useState } from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import LibraryFormStyled from './LibraryFormStyled';

const getYear = () => {
  return new Date().getFullYear();
};

const schema = Yup.object().shape({
  bookName: Yup.string()
    .min(2, 'Занадто коротка назва!')
    .required('Заповніть поле "Назва книги"'),
  bookAuthor: Yup.string().required('Заповніть поле "Автор книги"'),
  bookYear: Yup.number()
    .min(1000, 'Повинно бути 4 символу')
    .max(getYear(), 'Не більш, ніж поточний рік')
    .required('Заповніть поле "Рік випуску"')
    .typeError('Введіть число'),
  bookPages: Yup.number()
    .min(1, 'Min значення 1')
    .required('Заповніть поле "Кількість сторінок"')
    .typeError('Введіть число'),
});

const initialState = {
  bookName: '',
  bookAuthor: '',
  bookYear: '',
  bookPages: '',
};

const LibraryForm = () => {
  const [state, setState] = useState({ ...initialState });

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
                    value={values.bookName}
                    name="bookName"
                    placeholder="..."
                    autoComplete="off"
                  />
                  <ErrorMessage
                    className="bookFormError"
                    component="div"
                    name="bookName"
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
                      value={values.bookAuthor}
                      name="bookAuthor"
                      placeholder="..."
                      autoComplete="off"
                    />
                    <ErrorMessage
                      className="bookFormError"
                      component="div"
                      name="bookAuthor"
                    />
                  </div>
                </label>

                <label className="bookFormListItem">
                  <span className="bookFormListItemTitle">Рік випуску</span>
                  <div className="wrapper">
                    <Field
                      className="bookFormInput  input2"
                      type="text"
                      value={values.bookYear}
                      name="bookYear"
                      placeholder="..."
                      autoComplete="off"
                    />
                    <ErrorMessage
                      className="bookFormError"
                      component="div"
                      name="bookYear"
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
                      value={values.bookPages}
                      name="bookPages"
                      placeholder="..."
                      autoComplete="off"
                    />
                    <ErrorMessage
                      className="bookFormError"
                      component="div"
                      name="bookPages"
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

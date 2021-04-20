import React, { useState } from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import LibraryFormStyled from './LibraryFormStyled';

const schema = Yup.object().shape({
  bookName: Yup.string()
    .min(2, 'Занадто коротка назва!')
    .required('Заповніть поле "Назва книги"'),
  bookAuthor: Yup.string().required('Заповніть поле "Автор книги"'),
  bookYear: Yup.number()
    .min(4, 'Min значення 4 символу')
    .required('Заповніть поле "Рік випуску"'),
  bookPages: Yup.number()
    .min(1, 'Min значення 1')
    .required('Заповніть поле "Кількість сторінок"'),
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
                <Field
                  className="bookFormInput"
                  type="text"
                  value={values.bookName}
                  name="bookName"
                  autoComplete="off"
                />
                <ErrorMessage
                  className="bookFormError"
                  component="div"
                  name="bookName"
                />
              </label>

              <label className="bookFormListItem">
                <span className="bookFormListItemTitle">Автор книги</span>

                <Field
                  className="bookFormInput"
                  type="text"
                  value={values.bookAuthor}
                  name="bookAuthor"
                  autoComplete="off"
                />
                <ErrorMessage
                  className="bookFormError"
                  component="div"
                  name="bookAuthor"
                />
              </label>

              <label className="bookFormListItem">
                <span className="bookFormListItemTitle">Рік випуску</span>

                <Field
                  className="bookFormInput"
                  type="text"
                  value={values.bookYear}
                  name="bookYear"
                  autoComplete="off"
                />
                <ErrorMessage
                  className="bookFormError"
                  component="div"
                  name="bookYear"
                />
              </label>

              <label className="bookFormListItem">
                <span className="bookFormListItemTitle">
                  Кількість сторінок
                </span>

                <Field
                  className="bookFormInput"
                  type="text"
                  value={values.bookPages}
                  name="bookPages"
                  autoComplete="off"
                />
                <ErrorMessage
                  className="bookFormError"
                  component="div"
                  name="bookPages"
                />
              </label>
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

import ResultStyled from "./ResultStyled";
import React from 'react'
import DatePicker from 'react-datepicker'
import { useFormik } from 'formik'
import * as yup from 'yup'
import 'react-datepicker/dist/react-datepicker.css'

const Result = () => {
  const validationSchema = yup.object({
    date: yup.string().required('Виберіть дату'),
    pages: yup.number().required(`Обов'язкове поле`),
  })

  const formik = useFormik({
    initialValues: {
      date: '',
      pages: '',
    },
    validationSchema,
  })

  const handleDateChange = date => {
    formik.setFieldValue('date', date)
  }
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
              <span className="error ">{formik.errors.pages}</span>
            ) : null}
          </div>
        </div>
        <button type="submit" className="formButton">
          Додати результат
        </button>
      </form>
        </ResultStyled>
    )
}
export default Result;
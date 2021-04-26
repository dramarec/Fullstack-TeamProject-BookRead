import React from 'react';
// import Select from 'react-select';
import InputDatePicker from '../dataPicker/PickerData';

const FormTraning = () => {
  return (
    <form className="training-form">
      <div className="training-form__wrap">
        <InputDatePicker />
        <InputDatePicker />

        {/* <select name="Обрати книги з бібліотеки">
          <label>Обрати книги з бібліотеки</label>
        </select> */}
      </div>
    </form>
  );
};

export default FormTraning;

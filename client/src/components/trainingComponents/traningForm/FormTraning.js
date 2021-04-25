import React from 'react';

import InputDatePicker from '../dataPicker/PickerData';

const FormTraning = () => {
  return (
    <form className="training-form">
      <div className="training-form__wrap">
        <InputDatePicker />
        <InputDatePicker />
      </div>
    </form>
  );
};

export default FormTraning;

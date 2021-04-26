import React from 'react';
// import Select from 'react-select';
import InputDatePicker from '../dataPicker/PickerData';
import FormTraningStyle from './FormTraningStyle';

const FormTraning = () => {
  return (
    <FormTraningStyle>
      <form className="training-form">
        <div className="training-form__wrap">
          <div className="training-form__pickers">
            <InputDatePicker />
            <InputDatePicker />
          </div>

          <div className="selectwrap">
            <select className="select" name="select">
              <option value="Обрати книги з бібліотеки">
                Обрати книги з бібліотеки
              </option>
              <option value="26-35">Harry Potter</option>
              <option value="36+">Жизнь и ловля пресноводных рыб</option>
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

{
  /* <p>
<label className="training-form__select">
  Обрати книги з бібліотеки
  <select
    name="age" 
  >
    <option value="" disabled>
      ...
    </option>
    <option value="18-25">18-25</option>
    <option value="26-35">26-35</option>
    <option value="36+">36+</option>
  </select>
</label>
</p> */
}

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Wrapper from './PickerDataStyle';

const InputDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Wrapper>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        placeholderText="Початок"
      />
    </Wrapper>
  );
};

export default InputDatePicker;

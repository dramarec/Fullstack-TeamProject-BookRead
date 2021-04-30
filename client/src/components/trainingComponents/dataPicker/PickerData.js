import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import CalendarIcon from '../../../assets/icons/CalendarIcon';
import Wrapper from './PickerDataStyle';

const InputDatePicker = ({ pickedDate, placeholderText, onChange }) => {
    return (
        <Wrapper>
            <DatePicker
                onChange={date => onChange(date)}
                placeholderText={placeholderText}
                className="data-picker"
                dateFormat="yyyy-MM-dd"
                selected={pickedDate}
                minDate={new Date()}
                name="data"
            />
            <CalendarIcon />
        </Wrapper>
    );
};

export default InputDatePicker;

import React from 'react';
import { useSelector } from 'react-redux';
// import { Select } from 'react-select';
import { getWillRead } from '../../../../redux/selectors/bookSelector';
import FormItem from '../item/FormItem';

const Selector = ({ value, onChange }) => {
    const booksWillRead = useSelector(getWillRead);
    return (
        <div className="selectwrap">
            <select
                className="select"
                name="select"
                onChange={value => onChange(value)}
            >
                {/* <option value="Обрати книги з бібліотеки"> */}
                <option>Обрати книги з бібліотеки</option>

                {booksWillRead.map(book => (
                    <FormItem key={book._id} {...book} />
                ))}
            </select>

            <button type="submit" className="bookFormBtn">
                Додати
            </button>
        </div>
    );
};

export default Selector;

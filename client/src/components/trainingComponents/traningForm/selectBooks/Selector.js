import React from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { getWillRead } from '../../../../redux/selectors/bookSelector';
import FormItem from '../item/FormItem';

const Selector = ({ value, onChange }) => {
    const booksWillRead = useSelector(getWillRead);
    const bookSelect = booksWillRead.map(book => ({
        ...book,
        label: book.title,
        value: book.title,
    }));
    // console.log(bookSelect, 'book1');
    const customStyles = {
        input: (provided, state) => ({
            ...provided,
            height: '32px',
        }),
        menu: (provided, state) => ({
            ...provided,
            marginTop: '0px',
        }),
    };

    return (
        <Select
            className="selectorBooks"
            placeholder="Обрати книги з бібліотеки"
            // value={value}
            options={bookSelect}
            onChange={value => onChange(value)}
            styles={customStyles}
        />
    );
};

export default Selector;

// <div className="selectwrap">
//     <select
//         className="select"
//         name="select"
//         onChange={value => onChange(value)}
//     >
//         {/* <option value="Обрати книги з бібліотеки"> */}
//         <option>Обрати книги з бібліотеки</option>

//         {booksWillRead.map(book => (
//             <FormItem key={book._id} {...book} />
//         ))}
//     </select>
// </div>

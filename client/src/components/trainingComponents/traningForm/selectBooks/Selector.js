import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import {
    getWillRead,
    getNowRead,
} from '../../../../redux/selectors/bookSelector';
import FormItem from '../item/FormItem';

const Selector = ({ onChange }) => {
    const booksWillRead = useSelector(getWillRead);
    const booksIsReading = useSelector(getNowRead);
    // const booksIsReadingUpdate = booksIsReading.map(book => ({

    // }));

    const totalArray = [...booksWillRead, ...booksIsReading];

    const bookSelect = totalArray.map(book => ({
        ...book,
        label: book.title,
        value: book.title,
    }));

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

    //const book = bookSelect.filter(obj => obj.title !== value.title)

    return (
        <Select
            className="selectorBooks"
            placeholder="Обрати книги з бібліотеки"
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

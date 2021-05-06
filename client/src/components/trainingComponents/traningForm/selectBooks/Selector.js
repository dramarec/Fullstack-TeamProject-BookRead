import React from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { getWillRead } from '../../../../redux/selectors/bookSelector';

const Selector = ({ onChange }) => {
    const booksWillRead = useSelector(getWillRead);
    const bookSelect = booksWillRead.map(book => ({
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

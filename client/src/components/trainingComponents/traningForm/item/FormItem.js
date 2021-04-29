import React from 'react';

const FormItem = book => {
    return (
        <>
            <option key={book._id} value={book._id}>
                {book.title}
            </option>
        </>
    );
};

export default FormItem;

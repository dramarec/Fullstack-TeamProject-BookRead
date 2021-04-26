import React from 'react';
import DescBookList from '../booksLists/desc/DescBookList';
import FormTraning from '../traningForm/FormTraning';

const MyTraining = () => {
  return (
    <div className="training">
      <div className="baner">
        <p className="baner__title">Моє тренування</p>
      </div>
      <FormTraning />
      <DescBookList />
    </div>
  );
};

export default MyTraining;

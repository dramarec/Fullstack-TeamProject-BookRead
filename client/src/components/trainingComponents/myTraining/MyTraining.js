import React from 'react';
import FormTraning from '../traningForm/FormTraning';

const MyTraining = () => {
    return (
        <div className="training">
            <div className="baner">
                <p className="baner__title">Моє тренування</p>
            </div>
            <FormTraning />
        </div>
    );
};

export default MyTraining;

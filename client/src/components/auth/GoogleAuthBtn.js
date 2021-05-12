import React from 'react';
import icon from '../../assets/img/googleIcon.png';
import GoogleAuthStyle from './GoogleAuthStyle';

const GoogleAuthBtn = () => {
    return (
        <GoogleAuthStyle>
            <a
                href={process.env.REACT_APP_GOOGLE_BASE_URL}
                className="google-btn"
            >
                <img
                    src={icon}
                    alt="google-icon"
                    className="google-btn__icon"
                />
                Google
            </a>
        </GoogleAuthStyle>
    );
};

export default GoogleAuthBtn;

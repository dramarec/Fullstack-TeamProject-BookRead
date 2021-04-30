import React from 'react';
import icon from '../../assets/img/googleIcon.png';
import GoogleAuthStyle from './GoogleAuthStyle';

const GoogleAuthBtn = () => {
    return (
        <GoogleAuthStyle>
            <a
                href="http://localhost:5000/api/users/auth/google"
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

import React from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

const google = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const GoogleAuthBtn = () => {
  const responseSuccessGoogle = response => {
    axios({
      method: 'POST',
      url: 'http://localhost:5000/api/users/auth/google',
      data: { tokenId: response.tokenId },
    }).then(response => {
      console.log('Google login sucess ===> response', response);
    });
  };

  const responseErrorGoogle = response => {
    console.log('responseErrorGoogle ===> response', response);
  };

  return (
    // <div>
    <>
      <GoogleLogin
        clientId={google}
        buttonText="Google"
        onSuccess={responseSuccessGoogle}
        onFailure={responseErrorGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </>
    // </div>
  );
};

export default GoogleAuthBtn;

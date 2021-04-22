const { User } = require('../../models');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const googleAuth = (req, res) => {
  const { tokenId } = req.body;
  client
    .verifyIdToken({
      idToken: tokenId,
      audience: process.env.GOOGLE_CLIENT_ID,
    })
    .then(response => {
      const { email_verified, name, email } = response.payload;
      console.log('googleAuth ===> response.payload', response.payload);
      if (email_verified) {
        User.findOne({ email }).exec((err, user) => {
          if (err) {
            return res.status(400).json({
              error: 'Something went wrong...',
            });
          } else {
            if (user) {
              const token = jwt.sign(
                { _id: user._id },
                process.env.GOOGLE_CLIENT_SECRET,
                {
                  expiresIn: '30d',
                },
              );
              const { _id, name, email } = user;
              res.json({
                token,
                user: { _id, name, email },
              });
            } else {
              let password = email + process.env.GOOGLE_CLIENT_SECRET;
              let newUser = new User({ name, email, password });
              newUser.save((err, data) => {
                if (err) {
                  return res.status(400).json({
                    error: 'something went wrong',
                  });
                }
                const token = jwt.sign(
                  { _id: data._id },
                  process.env.GOOGLE_CLIENT_SECRET,
                  {
                    expiresIn: '30d',
                  },
                );
                const { _id, name, email } = newUser;
                res.json({
                  token,
                  user: { _id, name, email },
                });
              });
            }
          }
        });
      }
    });
  console.log();
};

// const queryString = require('query-string');
// const axios = require('axios');
// const { User } = require('../../models');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// console.log('process.env.GOOGLE_CLIENT_ID', process.env.GOOGLE_CLIENT_ID);
// console.log('googleAuth ===> process.env.BASE_URL', process.env.BASE_URL);

// const googleAuth = async (req, res) => {
//   const stringifiedParams = queryString.stringify({
//     client_id: process.env.GOOGLE_CLIENT_ID,
//     redirect_uri: `${process.env.BASE_URL}/auth/google-redirect`,
//     scope: [
//       'https://www.googleapis.com/auth/userinfo.email',
//       'https://www.googleapis.com/auth/userinfo.profile',
//     ].join(' '),
//     response_type: 'code',
//     access_type: 'offline',
//     prompt: 'consent',
//   });
//   return res.redirect(
//     `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`,
//   );
// };

// const googleRedirect = async (req, res) => {
//   const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;

//   console.log('googleRedirect ===> fullUrl', fullUrl);
//   console.log('googleRedirect ===> req.protocol', req.protocol);
//   console.log('googleRedirect ===> req.originalUrl', req.originalUrl);
//   console.log("googleRedirect ===> req.get('host')", req.get('host'));

//   const urlObj = new URL(fullUrl);
//   console.log('googleRedirect ===> urlObj', urlObj);

//   const urlParams = queryString.parse(urlObj.search);
//   console.log('googleRedirect ===> urlParams', urlParams);

//   const code = urlParams.code;
//   console.log('googleRedirect ===> code', code);

//   const tokenData = await axios({
//     url: `https://oauth2.googleapis.com/token`,
//     method: 'post',
//     data: {
//       client_id: process.env.GOOGLE_CLIENT_ID,
//       client_secret: process.env.GOOGLE_CLIENT_SECRET,
//       redirect_uri: `${process.env.BASE_URL}/auth/google-redirect`,
//       grant_type: 'authorization_code',
//       code,
//     },
//   });
//   console.log('googleRedirect ===> tokenData', tokenData);

//   const userData = await axios({
//     url: 'https://www.googleapis.com/oauth2/v2/userinfo',
//     method: 'get',
//     headers: {
//       Authorization: `Bearer ${tokenData.data.access_token}`,
//     },
//   });
//   console.log('googleRedirect ===> userData', userData);
//   try {
//     const userByEmail = await User.findOne({
//       email: userData.data.email,
//     }).populate({
//       path: 'book',
//     });
//     if (userByEmail) {
//       return res.status(409).json({
//         status: 'error',
//         code: 409,
//         data: 'Conflict',
//         message: 'Email in use',
//       });
//     }
//   } catch (error) {}
//   return res.redirect(
//     `${process.env.FRONTEND_URL}?email=${userData.data.email}`,
//   );
// };

module.exports = { googleAuth /* googleRedirect */ };

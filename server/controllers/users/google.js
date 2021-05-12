const axios = require('axios');
const queryString = require('query-string');
const jwt = require('jsonwebtoken');
const { userServices } = require('../../services');

const googleAuth = async (req, res, next) => {
    try {
        const stringifiedParams = queryString.stringify({
            client_id: process.env.GOOGLE_CLIENT_ID,
            redirect_uri: `${process.env.BASE_URL}/auth/google-redirect`,
            scope: [
                'https://www.googleapis.com/auth/userinfo.email',
                'https://www.googleapis.com/auth/userinfo.profile',
            ].join(' '),
            response_type: 'code',
            access_type: 'offline',
            prompt: 'consent',
        });
        return res.redirect(
            `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`,
        );
    } catch (err) {
        next(err);
    }
};

const googleRedirect = async (req, res, next) => {
    try {
        const fullUrl = `${req.protocol}://${req.get('host')}${
            req.originalUrl
        }`;

        const urlObj = new URL(fullUrl);

        const urlParams = queryString.parse(urlObj.search);

        const code = urlParams.code;

        const tokenData = await axios({
            url: 'https://oauth2.googleapis.com/token',
            method: 'post',
            data: {
                client_id: process.env.GOOGLE_CLIENT_ID,
                client_secret: process.env.GOOGLE_CLIENT_SECRET,
                redirect_uri: `${process.env.BASE_URL}/auth/google-redirect`,
                grant_type: 'authorization_code',
                code,
            },
        });

        const userData = await axios({
            url: 'https://www.googleapis.com/oauth2/v2/userinfo',
            method: 'get',
            headers: {
                Authorization: `Bearer ${tokenData.data.access_token}`,
            },
        });

        const email = userData.data.email;
        const username = userData.data.name;

        const user = await userServices.findUserByEmail(email);
        const password = process.env.JWT_SECRET_KEY;
        if (!user) {
            await userServices.addUser({ email, username, password });
        }

        const id = user._id;
        const payload = { id };
        const accessToken = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
            expiresIn: '30d',
        });

        await userServices.updateToken(id, accessToken);

        return res.redirect(
            `${process.env.FRONTEND_URL}/?accessToken=${accessToken}`,
        );
    } catch (err) {
        next(err);
    }
};

const googleLogin = async (req, res, next) => {
    try {
        const token = req.body.accessToken;

        if (!token) {
            return res.status(400).json({
                code: 400,
                message: 'Not found token',
            });
        }
        const user = await userServices.findUserByToken(token);

        if (!user) {
            return res.status(401).json({
                message: 'Wrong token!',
            });
        }

        const id = user.id;
        const payload = { id };
        const newToken = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
            expiresIn: '30d',
        });
        await userServices.updateToken(id, newToken);

        return res.status(200).json({
            status: 'success',
            data: {
                token,
                user,
            },
        });
    } catch (err) {
        next(err);
    }
};
module.exports = { googleLogin, googleAuth, googleRedirect };

// const googleAuth = (req, res) => {
//   const { tokenId } = req.body;
//   client
//     .verifyIdToken({
//       idToken: tokenId,
//       audience: process.env.GOOGLE_CLIENT_ID,
//     })
//     .then(response => {
//       const { email_verified, name, email } = response.payload;
//       const username = name;

//       if (email_verified) {
//         User.findOne({ email }).exec((err, user) => {
//           if (err) {
//             return res.status(400).json({
//               error: 'Something went wrong!',
//             });
//           } else {
//             if (user) {
//               const token = jwt.sign(
//                 { _id: user._id },
//                 process.env.JWT_SECRET_KEY,
//                 {
//                   expiresIn: '30d',
//                 },
//               );
//               const { _id, username, email } = user;
//               const id = _id;
//               userServices.updateToken(id, token);
//               res.json({
//                 token,
//                 user: { _id, username, email },
//               });
//             } else {
//               let password = email + process.env.JWT_SECRET_KEY;
//               let newUser = new User({ username, email, password });
//               newUser.save((err, data) => {
//                 if (err) {
//                   return res.status(400).json({
//                     error: 'Something went wrong',
//                   });
//                 }
//                 const token = jwt.sign(
//                   { _id: data._id },
//                   process.env.JWT_SECRET_KEY,
//                   {
//                     expiresIn: '30d',
//                   },
//                 );
//                 const { _id, username, email } = newUser;
//                 const id = _id;

//                 userServices.updateToken(id, token);

//                 res.json({
//                   token,
//                   user: { _id, username, email },
//                 });
//               });
//             }
//           }
//         });
//       }
//     });
// };

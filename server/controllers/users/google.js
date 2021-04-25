const { User } = require('../../models');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const { userServices } = require('../../services');

// process.env.GOOGLE_CLIENT_SECRET,
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
      const username = name;

      if (email_verified) {
        User.findOne({ email }).exec((err, user) => {
          if (err) {
            return res.status(400).json({
              error: 'Something went wrong!',
            });
          } else {
            if (user) {
              const token = jwt.sign(
                { _id: user._id },
                process.env.JWT_SECRET_KEY,
                {
                  expiresIn: '30d',
                },
              );
              const { _id, username, email } = user;
              const id = _id;
              userServices.updateToken(id, token);
              res.json({
                token,
                user: { _id, username, email },
              });
            } else {
              let password = email + process.env.JWT_SECRET_KEY;
              let newUser = new User({ username, email, password });
              newUser.save((err, data) => {
                if (err) {
                  return res.status(400).json({
                    error: 'Something went wrong',
                  });
                }
                const token = jwt.sign(
                  { _id: data._id },
                  process.env.JWT_SECRET_KEY,
                  {
                    expiresIn: '30d',
                  },
                );
                const { _id, username, email } = newUser;
                const id = _id;

                userServices.updateToken(id, token);

                res.json({
                  token,
                  user: { _id, username, email },
                });
              });
            }
          }
        });
      }
    });
};

module.exports = googleAuth;

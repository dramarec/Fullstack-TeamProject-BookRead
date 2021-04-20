const passport = require('passport')
require('../config/passport')

const guard = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    const token = req.headers.authorization
      ? req.headers.authorization.split(' ')[1]
      : null

    if (err || !user) {
      return res.status(401).json({
        status: 'error',
        code: 401,
        message: 'Not authorized',
      })
    }

    req.user = user

    return next()
  })(req, res, next)
}

module.exports =  guard 

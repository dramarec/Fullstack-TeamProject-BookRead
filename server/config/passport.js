const passport = require("passport");
const { ExtractJwt, Strategy } = require("passport-jwt");
const dotenv = require("dotenv");
dotenv.config();
const { userServices } = require("../services");

const SECRET_KEY = process.env.JWT_SECRET_KEY;

const params = {
  secretOrKey: SECRET_KEY,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

passport.use(
  new Strategy(params, async (payload, done) => {
    try {
      const user = await userServices.findUserById({ _id: payload.id });
      if (!user) {
        return done(new Error("User not found"));
      }
      if (!user.token) {
        return done(null, false);
      }
      return done(null, user);
    } catch (err) {
      done(err);
    }
  })
);

const { Schema, SchemaTypes } = require('mongoose');
const bcrypt = require('bcryptjs');
const SALT_FACTOR = 6;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required'],
      validate(value) {
        const re = /\S+@\S+\.\S+/;
        return re.test(String(value).toLowerCase());
      },
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    books: [
      {
        type: SchemaTypes.ObjectId,
        ref: 'Book',
      },
    ],
    training: {
      type: SchemaTypes.ObjectId,
      default: null,
      ref: 'Training',
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false },
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(
    this.password,
    bcrypt.genSaltSync(SALT_FACTOR),
  );
  next();
});

userSchema.methods.validPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = userSchema;

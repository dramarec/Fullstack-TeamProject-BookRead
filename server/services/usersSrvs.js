const { User } = require('../models');

const findUserById = async id => {
    const userById = await User.findById(id);

    return userById;
};

const findUserByEmail = async email => {
    const userByEmail = await User.findOne({ email });

    return userByEmail;
};

const addUser = async body => {
    const newUser = await new User(body).save();

    return newUser;
};

const updateToken = async (id, token) => {
    const newToken = await User.updateOne({ _id: id }, { token });

    return newToken;
};

const findUserByToken = async token => {
    const user = await User.findOne({ token });

    return user;
};

module.exports = {
    findUserById,
    findUserByEmail,
    addUser,
    updateToken,
    findUserByToken,
};

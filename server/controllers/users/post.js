const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const { userServices } = require('../../services');

const SECRET_KEY = process.env.JWT_SECRET_KEY;

const reg = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await userServices.findUserByEmail(email);
        if (user) {
            return res.status(409).json({
                status: 'error',
                code: 409,
                data: 'Conflict',
                message: 'Email in use',
            });
        }
        const newUser = await userServices.addUser({ ...req.body });
        return res.status(201).json({
            status: 'success',
            data: {
                user: {
                    email: newUser.email,
                    username: newUser.username,
                },
            },
        });
    } catch (e) {
        next(e);
    }
};

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userServices.findUserByEmail(email);
        // const isValidPassword = await user.validPassword(password)
        if (!user || !(await user.validPassword(password))) {
            return res.status(401).json({
                status: 'error',
                code: 401,
                data: 'Unauthorized',
                message: 'Email or password is wrong',
            });
        }
        const id = user._id;
        const payload = { id };
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '30d' });
        await userServices.updateToken(id, token);
        return res.status(200).json({
            status: 'success',
            code: 200,
            data: {
                token,
                user: {
                    username: user.username,
                    email,
                    books: user.books,
                    training: user.training,
                },
            },
        });
    } catch (e) {
        next(e);
    }
};

const logout = async (req, res, next) => {
    try {
        const id = req.user.id;
        await userServices.updateToken(id, null);
        return res.status(204).json({
            status: 'Successful operation',
            code: 204,
        });
    } catch (e) {
        next(e);
    }
};

module.exports = {
    reg,
    login,
    logout,
};

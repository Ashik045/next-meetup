// external import
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// internal import
const UserModel = require('../models/userModel');

const createUser = async (req, res) => {
    try {
        const hashedPass = await bcrypt.hash(req.body.password, 10);
        const newUser = await new UserModel({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });
        await newUser.save();

        res.status(200).json({
            message: 'Signup successfull.',
        });
    } catch (error) {
        res.status(500).json({
            error: 'Authentication failed!',
        });
    }
};

const userLogin = async (req, res) => {
    try {
        const user = await UserModel.find({ email: req.body.email });
        if (user) {
            const isValidPass = await bcrypt.compare(req.body.password, user[0].password);

            if (isValidPass) {
                const token = jwt.sign(
                    {
                        // eslint-disable-next-line no-underscore-dangle
                        id: user[0]._id,
                        username: user[0].username,
                    },
                    process.env.JWT_SECRET,
                    { expiresIn: '2d' },
                );

                res.status(200).json({
                    message: user,
                    token,
                });
            } else {
                res.status(500).json({
                    error: 'Authentication failed!',
                });
            }
        } else {
            res.status(500).json({
                error: 'Authentication failed!',
            });
        }
    } catch (error) {
        res.status(500).json({
            error: 'Authentication failed!!',
        });
    }
};

module.exports = {
    createUser,
    userLogin,
};

// external import
const express = require('express');

// internal import
const { createUser, userLogin } = require('../controllers/authController');

const router = express.Router();

// create a user
router.post('/signup', createUser);

// user login
router.post('/login', userLogin);

module.exports = router;

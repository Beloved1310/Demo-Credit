/* eslint consistent-return: "off" */

const express = require('express');
const asyncMiddleware = require('../middleware/async');
const auth = require('../middleware/auth');
// const isAdmin = require('../middleware/isAdmin');

const router = express.Router();

const signUp = require('../controller/users/signUp');
const loginUser = require('../controller/users/loginUser');
// const forgotPassword = require('../controller/users/forgotPassword');
// const newPassword = require('../controller/users/newPassword');
// const userProfile = require('../controller/users/userProfile');
// const adminCheckUserProfile = require('../controller/users/adminCheckUserProfile');

router.post('/signup', asyncMiddleware(signUp));
router.post('/login', asyncMiddleware(loginUser));


module.exports = router;
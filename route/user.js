/* eslint consistent-return: "off" */

const express = require('express');
const asyncMiddleware = require('../middleware/async');
const auth = require('../middleware/auth');


const router = express.Router();

const signUp = require('../controller/users/signUp');
const loginUser = require('../controller/users/loginUser');


router.post('/signup', asyncMiddleware(signUp));
router.post('/login', asyncMiddleware(loginUser));



module.exports = router;
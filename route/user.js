/* eslint consistent-return: "off" */

const express = require('express');
const asyncMiddleware = require('../middleware/async');
const auth = require('../middleware/auth');


const router = express.Router();

const signUp = require('../controller/users/signUp');
const loginUser = require('../controller/users/loginUser');
const fundUser = require('../controller/fundWallet');
const fundAccount = require('../controller/fundAnotherAccount');
const withdrawfunds = require('../controller/withdrawfunds');



router.post('/signup', asyncMiddleware(signUp));
router.post('/login', asyncMiddleware(loginUser));
router.post('/fund', auth, asyncMiddleware(fundUser));
router.post('/fundaccount', auth, asyncMiddleware(fundAccount));
router.post('/withdrawal', auth, asyncMiddleware(withdrawfunds));



module.exports = router;
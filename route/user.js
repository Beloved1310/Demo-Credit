/* eslint consistent-return: "off" */

const express = require("express");
const asyncMiddleware = require("../middleware/async");
const { authJWT } = require("../middleware/auth");

const router = express.Router();

const signUp = require("../controller/users/signUp");
const loginUser = require("../controller/users/loginUser");
const fundUser = require("../controller/fundWallet");
const fundAccount = require("../controller/fundAnotherAccount");
const withdrawfunds = require("../controller/withdrawfunds");

router.get('/', (req, res)=>{ return res.send("OK")});


router.post("/signup", asyncMiddleware(signUp));
router.post("/login", asyncMiddleware(loginUser));
router.post("/fund", authJWT, asyncMiddleware(fundUser));
router.post("/fundaccount", authJWT, asyncMiddleware(fundAccount));
router.post("/withdrawal", authJWT, asyncMiddleware(withdrawfunds));

module.exports = router;

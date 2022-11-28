const express = require('express');
const cors = require('cors');
require('dotenv').config();
const debug = require('debug')('app');
const { PORT } = require('./config');

const app = express();
// require('./db/db')();

const user = require('./route/user');

app.use(cors({ origin: '*' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/', user);


app.listen(PORT, () => {
  console.log(`Web server is running ${PORT}`)
  debug(`Web server is running ${PORT}`);
});

const debug = require('debug')('app');
const { PORT } = require('./config');
const app = require('./app')


app.listen(PORT, () => {
  console.log(`Web server is running ${PORT}`)
  debug(`Web server is running ${PORT}`);
});

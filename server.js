const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

// require routers
const apiRouter = require('./routes/api');

// handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// define route handlers
app.use('/api', apiRouter);

// route handler to respond with main app
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

// statically serve everything in the build folder on the route '/dist'
app.use('/dist', express.static(path.join(__dirname, '../dist')));

// catch-all route handler for any requests to an unknown route
app.use('*', (req, res) => res.sendStatus(404));

//configure express global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errObj = Object.assign(defaultErr, err);
  return res.status(errObj.status).json(errObj.message);
});

// start server
app.listen(3000);

module.exports = app;

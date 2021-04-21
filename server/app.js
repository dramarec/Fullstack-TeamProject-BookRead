require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');

const { booksApi } = require('./api/books');
const { usersApi } = require('./api/users');
const { trainingApi } = require('./api/training');
const apiDocs = require('./swaggerDocs.json');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/books', booksApi);
app.use('/api/users', usersApi);
app.use('/api/training', trainingApi);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(apiDocs));

app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    code: 404,
    message: `Use api on routes: ${req.baseUrl} /api/books`,
    data: 'Not found',
  });
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({
    status: err.status === 500 ? 'fail' : 'error',
    code: 500,
    message: `${err.message.replace(/"/g, '')}`,
    data: err.status === 500 ? 'Internal Server Error' : err.data,
  });
});

const PORT = process.env.PORT || 5000;
const DB_HOST = process.env.DB_HOST;

const cennection = mongoose.connect(DB_HOST, {
  promiseLibrary: global.Promise,
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.on('connected', err => {
  console.log(`"Database connection successful"`);
});

mongoose.connection.on('error', err => {
  console.log(`Database connection error: ${err.message}`);
});

mongoose.connection.on('disconnected', err => {
  console.log(`Database disconnected`);
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Connection for DB disconnected and app terminated');
    process.exit(1);
  });
});

cennection
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch(err =>
    console.log(`Server not running. Error message: ${err.message}`),
  );

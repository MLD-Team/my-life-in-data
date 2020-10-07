const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
  auth: {
    user: 'fire',
    password: 'fYzgID9ajNNj3K3j',
  },
  useNewUrlParser: true,
});
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

const app = express();

// middleware for json body parsing
app.use('/api', express.json());

// routes for api
app.use('/api', require('./routes/api'));

// serve the index.html statically
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../template.html'))
);

app.use((err, req, res, next) => {
  next; // unused
  const defaultError = {
    log: '⚠️ Express error handler caught unknown middleware error.',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultError, err);
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => {
  console.log('⚡️ prepare your body');
});

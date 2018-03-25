'use strict';

require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

const authRouter = require('./route/auth-router.js');
const movieRouter = require('./route/movie-router.js');
mongoose.connect('mongodb://localhost/17-bearer-auth');

app.use('/api', authRouter);
app.use('/api', movieRouter);

const server = app.listen(PORT, () => {
  console.log(`server is running: ${PORT}`);
});
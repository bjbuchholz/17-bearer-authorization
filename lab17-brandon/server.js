'use strict';

require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;

const app = express();
mongoose.connect(process.env.MONGODB_URI);

const authRouter = require('./route/auth-router.js');
const movieRouter = require('./route/movie-router.js');

app.use('/api', authRouter);
app.use('/api', movieRouter);

const server = app.listen(PORT, () => {
  console.log(`server is running: ${PORT}`);
});
'use strict';
require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOD_URI);

const User = require('../model/user.js');
const MovieRating = require('../model/movie-rating');


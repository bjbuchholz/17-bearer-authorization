'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const MovieRating = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true},
  rating: { type: Number, min: 1, Max: 10 },
  title: { type: String}
});
 
module.exports = mongoose.model('MovieRating', MovieRating);

'use strict';

const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const MovieRating = require('../model/movie-rating.js');
const getCreds = require('../lib/authorization.js');
const jwt = require('jsonwebtoken');
const bearerMiddlewear = require('../lib/bearer-middleware'); 

const router = express.Router();

// POST request
// pass data as stringifed JSON in the body of a post request to create a new resource
// /api/resource-name?id
router.post('/movies', bearerMiddlewear, express.json(), (req, res) => {
  MovieRating.create(req.body)
    .then((movie) => {
      res.status(200).send(movie);
    })
    .catch(() => res.sendStatus(400));
});

// GET request
// pass the id of a resource though the url query params and use req.query to fetch a resource
router.get('/movies', bearerMiddlewear, (req, res) => {
  MovieRating.find()
  .then(movies => res.json(movies))
  .catch(err => res.send(err))
});

// PUT request
// pass data as stringifed JSON in the body of a put request to update a resource
router.put('/movies', bearerMiddlewear, (req, res) => {
});

// DELETE request
// pass the id of a resource though the url query params and use to delete a resource
router.delete('/movies', bearerMiddlewear, (req, res) => {

});
 
 module.exports = router;

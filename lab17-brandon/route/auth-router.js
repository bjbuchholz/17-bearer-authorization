'use strict';

const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const User = require('../model/user.js');
const getCreds = require('../lib/authorization.js');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/signup', express.json(), (req, res) => {
  User.create(req.body)
    .then((user) => {
      //how to configure a jwt token use .sign to create and .verify to verify
      res.status(200).send(user);
    })
    .catch(() => res.sendStatus(400));
});
//  once it hits server then verifies the token is attached
router.get('/signin', (req, res) => {
  let [username, password] = getCreds(req, res);
  User.findOne({username}).then(user => {
    user.checkPassword(password).then(result => {
      if (result) {
        let data = {userId: user._id};
        let token = jwt.sign(data, process.env.SECRET);
        res.status(200).send(token);
      } else {
        res.status(401).send('wrong password');
      }
    });
  }); 
 });
 
 module.exports = router;

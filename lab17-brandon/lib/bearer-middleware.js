'use strict';

const jwt = require('jsonwebtoken');
const User = require('../model/user.js');

function processBearer(req, res, next) {
    let authHeader = req.get('Authorization');
    var token = authHeader.split('Bearer ')[1];
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) res.status(401).send('invalid token');
        User.findOne({_id: decoded.userId })
        .then(user => {
            req.user = user;
        next();
    })
    .catch(err => res.send(err.message))
 });
}

   module.exports = processBearer;
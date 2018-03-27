'use strict';

const superagent = require('superagent');

const PORT = process.env.PORT || 3000;
const SERVER_URL = 'http://localhost:' + PORT;
const SIGNUP_URL = SERVER_URL + '/api/signup';
const SIGNIN_URL = SERVER_URL + '/api/signin';

function getUserParams() {
  // using + Math.random() to avoid duplicate user errors
  return {
    username: 'bill' + Math.random(),
    email: 'bill@microsoft.com' + Math.random(),
    password: 'windows95'
  };
};


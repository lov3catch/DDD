'use strict';

const crypto = require('node:crypto');
const {crypto_params} = require('./config');

const hash = (password) => new Promise((resolve, reject) => {
  const salt = crypto.randomBytes(16).toString(crypto_params.algo);
  crypto.scrypt(password, salt, 64, (err, result) => {
    if (err) reject(err);
    resolve(salt + ':' + result.toString(crypto_params.algo));
  });
});

module.exports = hash;

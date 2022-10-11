'use strict';

module.exports = {
  db_params: {
    host: '127.0.0.1',
    port: 5432,
    database: 'example',
    user: 'marcus',
    password: 'marcus',
  },
  crypto_params: {
    algo: 'base64'
  },
  server: {
    app: {
      port: 8000,
    },
    static: {
      port: 8001,
    }
  }
};

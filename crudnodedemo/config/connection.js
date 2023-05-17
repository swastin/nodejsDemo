'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password,
  {
    host: config.host, dialect: config.dialect,

  });
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((err) => {
  console.log("Try again" + err);

});

module.exports = sequelize;

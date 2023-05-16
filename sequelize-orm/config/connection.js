'use strict';
//const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
//const db = {};
//console.log(config.database+"\n"+config.username+"\n"+config.password+"\n"+config.host+config.dialect);
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

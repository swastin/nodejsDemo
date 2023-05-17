var express = require('express');
var cookieParser = require('cookie-parser');
var winston = require('winston');
var { combine, timestamp, label, printf } = winston.format;
//const { body, validationResult } = require('express-validator');
//import * as winston from 'winston';
var app = express();
app.use(cookieParser());
app.use(express.urlencoded());
app.use(express.json());
/**
 * my customformat
 */
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

var logger = winston.createLogger({
  level: 'info',
  format: combine(
    label({ label: 'right meow!' }),
    timestamp(),
    myFormat
  ),
  transports: [
    new winston.transports.Console,
    new winston.transports.File({ filename: 'InfoLog.log', level: 'info' }),]
})

app.get('/', (req, res) => {

  for (let index = 0; index <5; index++) {
   logger.log('info', 'request received')
    
  }

  
  res.send("Hello World");
})
  ;
app.listen(8080, () => {
  console.log("Server is runing on port 8080...");
});
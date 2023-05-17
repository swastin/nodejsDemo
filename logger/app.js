var express = require('express');
var cookieParser = require('cookie-parser');
var winston = require('winston');
require('winston-daily-rotate-file');
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

var transport = new winston.transports.DailyRotateFile({
  filename: 'application-%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '2k',
  //maxFiles: '1d'
});


var logger = winston.createLogger({
  level: 'info',
  format: combine(
    label({ label: 'right meow!' }),
    timestamp(),
    myFormat
  ),
  transports: [transport,
    new winston.transports.Console,
    new winston.transports.File({ filename: 'InfoLog.log', level: 'info' }),]
})

app.get('/', (req, res) => {

  for (let index = 0; index < 50000; index++) {
    logger.log('info', 'request received')

  }


  res.send("Hello World");
})
  ;
app.listen(8080, () => {
  console.log("Server is runing on port 8080...");
});
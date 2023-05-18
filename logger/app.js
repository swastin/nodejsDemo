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
  //frequency: '1m',
  filename: 'application-%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '5k',
  //maxFiles: '1d'
});
transport.on('rotate', function (oldFilename, newFilename) {
  console.log('Rotating log files');
  console.log(oldFilename);
  console.log(newFilename);
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

  for (let index = 0; index < 5; index++) {
    logger.log('info', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis sem sit amet lectus faucibus sagittis vitae eu velit. Quisque vitae nisi gravida, dignissim dolor eget, ornare libero. In non interdum ante. Donec et odio in eros commodo ornare id eget nulla. Nullam egestas nibh ac sapien malesuada dapibus. Suspendisse potenti. Phasellus sollicitudin efficitur tellus eu finibus.')

  }


  res.send("Hello World");
})
  ;
app.listen(8080, () => {
  console.log("Server is runing on port 8080...");
});
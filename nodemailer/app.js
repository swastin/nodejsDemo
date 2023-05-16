
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var nodemailer = require('nodemailer');
var hbs = require('hbs');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
let transporter = nodemailer.createTransport({
port:587,//is the port to connect to(defaults to 587 if is secure is false or 465 if true)
host:'smtp.gmail.com',//is the hostname or IP address to connect to(defaults to ‘localhost’)
  auth: {
    user:'swastin95.sahoo@gmail.com',
    pass:'pjcetibpndpwgmpr',
  }//defines authentication data(see authentication section below)
})

var message = {
  from: "swastin95.sahoo@gmail.com",
  to: "swastin96.sahoo@gmail.com",
  subject: "Test Message ",
  html: "<h1>lorem ipsum doi sit</h1>"
};


var messageWithAttachment = {
  from: "swastin95.sahoo@gmail.com",
  to: "swastin96.sahoo@gmail.com",
  subject: "Test Message ",
  html: "<h1>lorem ipsum doi sit</h1>",
  attachments: [{
    filename: 'demo.txt',
    path: __dirname + '/demo.txt',
    contentType: 'text/plain'
  }]

}
app.get('/sendEmail', (req, res) => {
  transporter.sendMail(message).then((info) => {
    console.log(info);
    console.log(__dirname + '/demo.txt');
  }).catch((err) => {
    console.log(err);
  })
});
app.get('/sendEmailWithAttachment', (req, res) => {
  console.log(__dirname + '\\demo.txt');
  transporter.sendMail(messageWithAttachment).then((info) => {
    console.log(info);
  }).catch((err) => { console.log(err);})
});

app.listen(8080, () => {
  console.log("server started....");
});
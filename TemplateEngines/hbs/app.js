var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs');
var app = express();

// view engine setup
var persons = [
  {
    firstname: "swastin",
    lastname: "sahoo",
    phnumber: "9778651692",
    address: {
      plotnumber: "2rbf59/5",
      area: "unit - 9",
      landmark: "anandabazar",
      city: "bhubaneswar",
      state: "odisha",
      pin: "751022"
    },
    isEnabled: true

  },
  {
    firstname: "raju",
    lastname: "mohanty",
    phnumber: "9778651693",
    address: {
      plotnumber: "2rbf5/6",
      area: "unit-8",
      landmark: "anandabazar",
      city: "bhubaneswar",
      state: "odisha",
      pin: "751022"
    },
    isEnabled:false
  },
]

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.get('/', (req, res) => {
  //  var name = 'swastin';
  console.log(persons[0].address);
  res.render('demo', { persons: persons });
});
app.listen(8080);
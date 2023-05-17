var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs');
var mysql=require('mysql')
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'nodejsdemo'
})
connection.connect((err) => {

  if (err) {
    throw err;
  }
  console.log("database connected successfully");
/**
 *insert query
 */
  // connection.query('INSERT INTO customers (name, address) values(?,?)',["swastin","2rbf59/5" ],
  //   (err, result, field) => {
  //     if (err) {
  //       throw err;
  //     }
  //     console.dir(result);
  //     console.dir(field);
  // });

  /**
   * update
   */

  // connection.query('UPDATE customers SET address = ? WHERE id =?',['2rbf59/8',1],
  //  (err, result, field) => {
  //     if (err) {
  //     throw err;
  //     }
  //    console.dir(result);
  //      console.dir(field);
  //  });
/**
 * DELETE
 */
  // connection.query('DELETE  from customers',
  //   (err, result, field) => {
  //     if (err) {
  //       throw err;
  //     }
  //     console.dir(result);
  //     console.dir(field);
  //   });

});

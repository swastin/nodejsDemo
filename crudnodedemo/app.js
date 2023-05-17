var createError = require('http-errors');
var express = require('express');
var path = require('path');
var hbs = require('hbs');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var emp = require('./models/employee');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/*Details of all emplyee*/
app.get("/Employees", (req, res) => {
});
/**
 * get details of single emplyee based on id
 */
app.get("/Employees/:id", (req, res) => {

});
/**
 * save details of all the employee
 */
app.post("/Employees", (req, res) => {
  req.body.hireDate = new Date(req.body.hireDate);
  // req.body.createdAt = 'DEFAULT';
  // req.body.updatedAt = 'DEFAULT';

  console.log(req.body);
  emp.create(req.body, { fields: ['firstName', 'lastName', 'emailId', 'age', 'hireDate', 'salary'] }).then(() => {
    res.send({
      message: 'Employee is created succssfully'
    })
  }).catch((err) => {
    console.log(err);
    res.send({
      message: 'Employee is not  created succssfully\n' + err

    })

  });

});
/** update employee based on id */
app.put("/Employees/:id", (req, res) => {
  var id = req.params.id;
  emp.update(
    {
      firstName: 'rahat'
    },
    {
      where:
      {
        id: id
      }
    }).then(() => {
      res.send({
        message: 'Employee' + id + 'is updated succssfully'
      })
    }).catch((err) => {
      res.send({
        message: 'Employee is not  updated  succssfully\n' + err

      })
    });
});
/**
 * Delete an Employee based on id
 */

app.delete("/Employees/:id", (req, res) => {
  var id = req.params.id;
  emp.destroy({
    where:
    {
      id: id
    }
  }).then(() => {
    res.send({
      message: 'Employee' + id + 'is deleted  succssfully'
    })
  }).catch((err) => {
    res.send({
      message: 'Employee is not  deleted  succssfully\n' + err

    })
  });
});
app.listen(8082, () => {
  console.log("server is running......");
})
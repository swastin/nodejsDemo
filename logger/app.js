var express = require('express');
var cookieParser = require('cookie-parser');
const { body, validationResult } = require('express-validator');
var app = express();
app.use(cookieParser());
app.use(express.urlencoded());
app.use(express.json());
app.get('/', (req, res) => { res.sendFile(__dirname + '\\public\\validation.html'); })
app.post('/validation',

  body('date').notEmpty().isDate(),
  body('dnt').notEmpty().isISO8601().withMessage('Invalid....date and time...'),
  body('email').notEmpty().isEmail().withMessage('Email is invalid ...'),
  body('number').notEmpty().isInt({
    min: 5,
    max: 10,
    lt: 11,
    gt: 5
  }).withMessage('Number is not In range'),
  body('password').notEmpty().isStrongPassword({
    minLength: 10,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    returnScore: true,
    pointsPerUnique: 20,
    pointsPerRepeat: 5,
    pointsForContainingLower: 10,
    pointsForContainingUpper: 10,
    pointsForContainingNumber: 10,
    pointsForContainingSymbol: 10
  }).withMessage('Password is not strong...'),

  (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      res.send({
        date: req.body.date,
        dnt: req.body.dnt,
        email: req.body.email,
        password: req.body.password,
      });
    } else {
      res.send({ errors: result.array() });
      // res.send({ messsage: "hello world" });
    }


  })

app.listen(8080, () => {
  console.log("Server is runing on port 8080...");
});
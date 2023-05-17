
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs');
var multer = require('multer');
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + '\\public\\uploads\\');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage })
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.post('/Upload', upload.single('imgUp'), (req, res) => { res.send({ file: req.file }) });
app.get('/viewForm', (req, res) => {
  res.sendFile(__dirname + "\\public\\index.html");
});

app.post('/multiupload', upload.array('mulimage'), (req,res) => {
  res.send(req.files);
});
app.listen(8080, () => {console.log("server started....");});
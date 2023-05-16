var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());
app.use(express.urlencoded());
app.use(express.json());
app.get('/', (req, res) => {
  res.cookie('cookie_name', 'cookie_value').send('Cookie is set');
  //console.log(res.headersSent) // false
  //res.send('OK')
  //console.log(res.headersSent) // true
})
app.get('/demo', (req, res) => {
  // res.send();
  // res.send(`<h1>The id provided by the user is \t ${req.params.id}</h1> <br> <h1>  ip address is ${req.ip}</h1> <br>`);

  // console.dir(req.originalUrl)
  // console.dir(req.baseUrl)
  // console.dir(req.path)
  // console.log(req.get('Content-Type'));
  console.log("Cookies :  ", req.cookies);
});

app.get("/staticfile", (req, res) => {
  console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");

})
/**
 * Form handling
 * 
 */
app.get('/viewForm', (req, res) => {

  res.sendFile(__dirname + "/public/login.html")
});
app.post('/submitedform', (req, res) => {
  console.log(req.body);
  res.send('ok');
});
app.get('/searchform', (req, res) => {
  res.sendFile(__dirname + "/public/search.html")
  
})
app.get('/search', (req, res) => {
  console.log(req.query);
  res.send('ok');

})

app.listen(8080);
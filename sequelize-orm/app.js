var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var User = require("./models/User");
var app = express();
var user = {
    firstname: 'swastin',
    lastname: 'sahoo',
    age: 28,
    gender: 'male'
}
app.get("/create", (req, res) => {

    User.create(user).then((user1) => {
        res.send(user1);

    }).catch((err) => {
        console.log(err);

    });
    //  res.send("hi");

});
app.get("/update", async (req, res) => {
    var user2 = await User.update({ gender: 'female' }, {
        where: {
            id: 2
        }
    });
    res.send(user2)
});
app.get("/destroy", async (req, res) => {
    await User.destroy({
        truncate: true
    });
})


User.sync().then(() => {
    app.listen(8080, () => {
        console.log('server is connected....');
    });
}).catch((err) => {
    console.log("error in sync try again");
})
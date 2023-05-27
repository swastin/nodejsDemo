
var express = require('express');
var env = require('dotenv').config();
var passport = require('passport');
var googleStrategy = require('passport-google-oauth20').Strategy;
var authRouter = express.Router();
passport.serializeUser((user, done) => {
    done(null, user);
})
passport.deserializeUser(function (user, done) {
    done(null, user);
});

//console.log(process.env.GOOGLE_CLIENT_ID);
passport.use(new googleStrategy({
    clientID: '449865272004-gj383qmbc6cchcjbm05immrnqbcihdqt.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:8080/google/redirect'

},
    (accessToken, refreshToken, profile, cb) => {
        console.log(profile);
        cb(null, profile)
    }

)
)
authRouter.post('/google', passport.authenticate(
    'google', { scope: ['profile'] }
))
authRouter.get('/login', (res, req) => {
    res.send('login');

})
//authRouter.get('/logout', () => { })
//authRouter.get('/signup')
//authRouter.get('/profile')
authRouter.get('/error', (req, res) => {res.redirect('/login');})
authRouter.get('/success', (req, res) => {res.redirect('/');})
// authRouter.get('/', (req, res) => res.send('hello world'));

authRouter.get('/google/redirect', passport.authenticate('google', { failureRedirect: '/error' ,successRedirect: '/success'}), (req, res) => {
    res.redirect('/success');
})
module.exports = authRouter;


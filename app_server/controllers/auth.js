var passport = require('passport');

const getRegister = function(req, res) {
    res.render('register');
};

const login = passport.authenticate('google', { scope : ['profile', 'email'] });

const redirect = (passport.authenticate('google'),
  function(req, res) {
    res.redirect('/fixture');
  });

const logout = function(req, res) {
      req.logout();
      res.redirect('/');
  };

module.exports = {
   login, redirect,logout
};

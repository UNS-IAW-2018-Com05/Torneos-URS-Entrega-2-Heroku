var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var Session = require('express-session');
var logger = require('morgan');
var passport = require('passport');
require('./app_server/models/db');

const indexRouter = require('./app_server/routes/index');
const usersRouter = require('./app_server/routes/users');
const fechasRouter = require('./app_server/routes/fixture');
const posicionesRouter = require('./app_server/routes/posiciones');
const clubesRouter = require('./app_server/routes/clubes');
const authRouter = require('./app_server/routes/auth');
const apiRouter = require('./app_server/routes/api');
const editorRouter = require('./app_server/routes/editor');
const noticiasRouter = require('./app_server/routes/noticias');
const passportSetup = require('./app_server/config/passport-setup');
const favoritoRouter = require('./app_server/routes/equipofavorito');

var app = express();

// view engine setup
app.set('views', path.join(__dirname,'app_server', 'views'));
app.set('view engine', 'twig');

app.use(Session({
    secret: 'your-random-secret-19890913007',
    resave: true,
    saveUninitialized: true
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/fixture',fechasRouter);
app.use('/posiciones', posicionesRouter);
app.use('/clubes', clubesRouter);
app.use('/api',apiRouter);
app.use('/editor',editorRouter);
app.use('/auth',authRouter);
app.use('/noticias',noticiasRouter);
app.use('/equipofavorito',favoritoRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var logInRouter = require('./routes/logIn');
var aboutUsRouter = require('./routes/aboutUs');
var aboutUsbusRouter = require('./routes/aboutUsbus');
var bankAccountRouter = require('./routes/bankAccount');
var bnkAccountBusRouter = require('./routes/bnkAccountBus');
var businessRouter = require('./routes/business');
var formRouter = require('./routes/form');
var form2Router = require('./routes/form2');
var howToRouter = require('./routes/howTo');
var howTobusRouter = require('./routes/howTobus');
var logInBusRouter = require('./routes/logInBus');
var personalRouter = require('./routes/personal');
var productsRouter = require('./routes/products');
var products2Router = require('./routes/products2');
var profileRouter = require('./routes/profile');
var profileBusRouter = require('./routes/profileBus');
var signUpRouter = require('./routes/signUp');
var solutionsRouter = require('./routes/solutions');
var solutions2Router = require('./routes/solutions2');
var wayToBankRouter = require('./routes/wayToBank');
var wayToBank2Router = require('./routes/wayToBank2');
var logoutRouter = require('./routes/logout');


// const { Session } = require('inspector');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({secret:'sun'}));

app.use('/', indexRouter);
app.use('/logIn', logInRouter);
app.use('/aboutUs', aboutUsRouter);
app.use('/aboutUsbus', aboutUsbusRouter);
app.use('/bnkAccountBus', bnkAccountBusRouter);
app.use('/bankAccount', bankAccountRouter);
app.use('/business', businessRouter);
app.use('/form', formRouter);
app.use('/form2', form2Router);
app.use('/howTo', howToRouter);
app.use('/howTobus', howTobusRouter);
app.use('/logInBus', logInBusRouter);
app.use('/personal', personalRouter);
app.use('/products', productsRouter);
app.use('/products2', products2Router);
app.use('/profile', profileRouter);
app.use('/profileBus', profileBusRouter);
app.use('/signUp', signUpRouter);
app.use('/solutions', solutionsRouter);
app.use('/solutions2', solutions2Router);
app.use('/wayToBank', wayToBankRouter);
app.use('/wayToBank2', wayToBank2Router);
app.use('/logout', logoutRouter);

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
  res.render('index');
});

module.exports = app;

// require('getmodule');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var connection  = require('express-myconnection'); 
var mysql = require('mysql');
var app = express();
var http = require('http').Server(app);
var cors = require('cors');


app.set('view cache', false);
// To disable Swig's cache, do the following:
// NOTE: You should always cache templates in a production environment.
// Don't leave both of these to `false` in production!

app.use(logger('dev'));
app.use(cors());
app.set('jwtTokenSecret', 'younevertryyouneverknow');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
    connection(mysql,{
        host: 'localhost',
        user: 'root',
        password : '',
        port : 3306,
        database:'db_campus_andalin'
    },'request')
);


app.use('/', index);

app.use(function(req, res, next) {
    req.app = app;
    next();
});

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});

module.exports = app;

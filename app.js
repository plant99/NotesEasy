var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var formidable = require('formidable')
var mongodb = require('mongodb')
var mongoose = require('mongoose')

var index = require('./routes/index');
var addHandler = require('./routes/addHandler').postAdd ;
var listHandler = require('./routes/listHandler');
var show = require('./routes/show')
var delete1 = require('./routes/delete1')
var edit = require('./routes/edit')

app = express();
initDB = require('./routes/mongoStart').initDB;
initDB()
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.use('/add',addHandler)
app.use('/list',listHandler)
app.use('/show',show)
app.use('/delete',delete1)
app.use('/edit',edit)
app.use('/getContent/:sNo',function(req,res){
	Note.find({sNo:req.params.sNo},function(err,notes){
		if(err)
			console.log(err)
		else{
			res.setHeader('Content-Type','text/plain')
			res.end(notes[0]['content'])
		}
	})
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

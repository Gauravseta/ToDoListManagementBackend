var express=require('express');
var path=require('path');
var favicon=require('serve-favicon');
var logger=require('morgan');
var cookieParser=require('cookie-parser');
var bodyParser=require('body-parser');
var config = require('./config/default');
var app=express();



var index=require('./routes/index');

app.set('views',path.join(__dirname+'/views'));
app.set('view engine','pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));

app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers","Origin,X-Requested-With, Content-Type, Accept");
	next();
});
app.use('/todolist/tasks/',index);


var mongoose=require('mongoose');
var mongoDB=config.mongoDBURL;
mongoose.connect(mongoDB);

module.exports=app;

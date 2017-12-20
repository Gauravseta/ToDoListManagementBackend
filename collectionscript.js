var mongoose = require('mongoose');
var Task= require('./models/task');
var async = require('async');
var moment =require('moment');
var config = require('./config/default');

var mongoDBURL=config.mongoDBURL;

mongoose.connect(mongoDBURL);
var db = mongoose.connection;

function dropCollection(cb){
db.dropCollection('tasks',function(err,result){
	cb(null,'collection dropped');
});
}

function addData(cb){
var task1=new Task({
	name:'Task2',
	due_date:moment('2017-12-29').format('YYYY-MM-DD')
});


task1.save(function(err,task1Instance){
	cb(null,'task is added');
});
}

function showAllData(cb){
Task.find(function(err,tasks){
		cb(null,'all data is shown');
	});
}

async.series([
	dropCollection,
	addData,
	showAllData
	],
	function(err,results){
		if(err){
			console.log('some error has occureed');
		}
		if(!err){
		console.log('Collection in Db has been created sucessfully');
		mongoose.connection.close();
		}	
	}
);

    
 
 






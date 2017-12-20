var express=require('express');
var Task= require('../models/task');
var router=express.Router();
var moment = require('moment');

//This Endpoint is to add the Task in Tasks collection
router.post('/add',function(req,res,next){
		var due_date=moment(new Date(req.body.due_date)).format('YYYY-MM-DD');
		var task={name:req.body.name,due_date:due_date};
		Task.create(task,function(err,taskInstance){
			res.status(200).send('Data successfully saved');
		});	
});

//This Endpoint is to get all tasks of the date fetched in parameters
router.get('/:due_date',function(req,res,next){
		var duedate=moment(req.params.due_date).format('YYYY-MM-DD');
		Task.find({due_date:duedate},function(err,tasks){
			res.json(tasks);
		});	
});

module.exports=router;

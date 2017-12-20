var mongoose=require('mongoose');


var Schema=mongoose.Schema;

var taskSchema=new Schema({
	name:String,
	due_date:Date
});

module.exports=mongoose.model('Task',taskSchema);

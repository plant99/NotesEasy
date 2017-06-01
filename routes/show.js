var express = require('express');
var router = express.Router();
var serial;
router.get('/:id',function(req,res){
	//req.params.serial
	Note.find({_id:req.params.id},function(err,notes){
		res.render('show',{notes:notes[0]})
	})
})

module.exports = router ;
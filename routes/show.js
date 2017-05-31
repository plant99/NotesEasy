var express = require('express');
var router = express.Router();
var serial;
router.get('/:serial',function(req,res){
	//req.params.serial
	Note.find({sNo:req.params.serial},function(err,notes){
		res.render('show',{notes:notes[0]})
	})
})

module.exports = router ;
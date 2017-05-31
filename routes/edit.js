var express = require('express');
var router = express.Router();

router.get('/:sNo',function(req,res){
	res.setHeader('Content-Type','text/html')
	Note.find({sNo:req.params.sNo},function(err,notes){
			res.render('edit',{
				notes: notes[0]
			})
	})
})
module.exports = router ;
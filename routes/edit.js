var express = require('express');
var router = express.Router();

router.get('/:id',function(req,res){
	console.log('chutiya')
	res.setHeader('Content-Type','text/html')
	Note.find({_id:req.params.id},function(err,notes){
		console.log(notes[0])
			res.render('edit',{
				notes: notes[0]
			})
	})
})
module.exports = router ;
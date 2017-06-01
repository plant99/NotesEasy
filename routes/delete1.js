var express = require('express');
var router = express.Router();

router.post('/:id',function(req,res){
	Note.remove({_id:req.params.id},function(err, notes){
		if(err)
			console.log(err) ;
		else{
			res.setHeader('Content-Type','text/plain')
			res.end('This note with id '+req.params.id+ ' has been deleted.')
		}


		
	})
})
module.exports = router
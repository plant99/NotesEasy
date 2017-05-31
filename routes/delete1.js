var express = require('express');
var router = express.Router();

router.post('/:sNo',function(req,res){
	Note.remove({sNo:req.params.sNo},function(err, notes){
		if(err)
			console.log(err) ;
		else{
			res.setHeader('Content-Type','text/plain')
			res.end('This note with serial no '+req.params.sNo+ ' has been deleted.')
		}


		
	})
})
module.exports = router
var express = require('express');
var router = express.Router();

router.post('/:id',function(req,res){
	Note.remove({_id:req.params.id},function(err, notes){
		if(err){
						console.log(err) ;
						res.render('error',{
							message: "God knows what's going on. What about you troubleshoot me at:",
							email: "shivashispadhi(at)gmail.com"
						})
					}
		else{
			res.setHeader('Content-Type','text/html')
			res.render('message',{
				message: 'This note with id '+req.params.id+ ' has been deleted.'
			})
		}


		
	})
})
module.exports = router
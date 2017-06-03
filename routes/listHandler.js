var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	Note.find(function(err,notes){
		console.log(notes)
			res.render('list',{notes:notes})
	})
})
router.use(function(req,res){
	res.render('error',{
				message: "God knows what's going on. What about you troubleshoot me at:",
				email: "shivashispadhi@gmail.com"
			})
})
module.exports = router ;
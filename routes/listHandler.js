var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	Note.find(function(err,notes){
		console.log(notes)
			res.render('list',{notes:notes})
	})
})
module.exports = router ;
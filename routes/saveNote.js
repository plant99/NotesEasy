var express = require('express');
var router = express.Router();
var formidable = require('formidable')

/* GET home page. */
router.post('/:id', function(req, res) {
	var form = new formidable.IncomingForm();
		form.parse(req,function(err,fields,files){
			Note.find({_id:req.params.id},function(err,notes){
				notes[0].content = fields['content']
				notes[0].priority = fields['priority']
				notes[0].save(function(err,note){
					console.log(note)
				})
			})
			console.log(req.params._id)
			setTimeout(function(){
				res.setHeader('Content-Type','text/html')
				res.render('message',{
					message: 'Change is saved'
				})
			},1000)
	})
})

module.exports = router;

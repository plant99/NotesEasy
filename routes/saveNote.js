var express = require('express');
var router = express.Router();
var formidable = require('formidable')

/* GET home page. */
router.post('/:sNo', function(req, res) {
	var form = new formidable.IncomingForm();
		form.parse(req,function(err,fields,files){
			Note.find({sNo:req.params.sNo},function(err,notes){
				notes[0].content = fields['content']
				notes[0].save(function(err,note){
					console.log(note)
				})
			})
			console.log(req.params.sNo)
			setTimeout(function(){
				res.end('Chutiyap is on')
			},1000)
	})
})

module.exports = router;

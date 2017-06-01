var express = require('express');
var router = express.Router();
var formidable = require('formidable')

module.exports.postAdd = function(req,res,next){
		var form = new formidable.IncomingForm();
		form.parse(req,function(err,fields,files){
				var note = new Note({
				content:fields['note']
				})
				note.save(function(err,note){
					if(err)
						console.log(err) ;
					else{
							console.log('Data saved') ;
							console.log(note.content+ " " + note._id)
						}


				})
				
			
			setTimeout(function(){
				res.end('Your note was saved. To view the list please go to /list')
			},1000)
			/*db.collection('notes').insert(fields)
			console.log('inserted')
			setTimeout(function(){
				res.end('Your note was saved. To view the list please go to /list')
			},1000)*/
		})

}
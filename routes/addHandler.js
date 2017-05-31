var express = require('express');
var router = express.Router();
var formidable = require('formidable')

module.exports.postAdd = function(req,res,next){
		var form = new formidable.IncomingForm();
		form.parse(req,function(err,fields,files){
			Note.find(function(err,notes){
				var newNoteIndex = notes.length + 1  ;
				console.log(newNoteIndex)
				var note = new Note({
				content:fields['note'],
				sNo:newNoteIndex
				})
				note.save(function(err,note){
					if(err)
						console.log(err) ;
					else{
							console.log('Data saved') ;
							console.log(note.content)
						}


				})
			
				
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
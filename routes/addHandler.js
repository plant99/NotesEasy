var express = require('express');
var router = express.Router();
var formidable = require('formidable')

module.exports.postAdd = function(req,res,next){
		var form = new formidable.IncomingForm();
		form.parse(req,function(err,fields,files){
				var note = new Note({
				content:fields['note'],
				priority:fields['priority']
				})
				note.save(function(err,note){
					if(err){
						console.log(err) ;
						res.render('error',{
							message: "God knows what's going on. What about you troubleshoot me at:",
							email: "shivashispadhi@gmail.com"
						})
					}
						
					else{
							console.log('Data saved') ;
							console.log(note.content+ " " + note.priority)
						}


				})
				
			
			setTimeout(function(){
				res.render('message',{
					message:'Your note was saved'
				})
			},1000)
			/*db.collection('notes').insert(fields)
			console.log('inserted')
			setTimeout(function(){
				res.end('Your note was saved. To view the list please go to /list')
			},1000)*/
		})

}
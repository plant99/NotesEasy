var express = require('express');
var router = express.Router();
var formidable = require('formidable')
module.exports.postAdd = function(req,res,next){
		var form = new formidable.IncomingForm();
		form.parse(req,function(err,fields,files){
			db.collection('notes').insert(fields)
			console.log('inserted')
		})

}
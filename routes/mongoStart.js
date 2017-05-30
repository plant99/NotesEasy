var mongodb = require('mongodb')

module.exports.initDB = function() {
	var MongoClient = mongodb.MongoClient;

	MongoClient.connect('mongodb://127.0.0.1:27017/notes', function(err, db) {
		console.log('Done connecting');
		global.db = db;
		return db ;
	});
};

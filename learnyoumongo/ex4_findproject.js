var ageArg = process.argv[2];
var url = 'mongodb://localhost:27017/learnyoumongo';
var mongo = require('mongodb').MongoClient
mongo.connect(url, function(err, db) {
	if (err) throw err;
      // db gives access to the database
	var Parrots = db.collection('parrots');
	Parrots.find({
		age: { $gt: +ageArg } 
	},{name: 1
    , age: 1
    , _id: 0
  }).toArray(function(err, documents) {
		if (err) throw err;
		console.log(documents);  	
		db.close();
	})
});




var url = 'mongodb://localhost:27017/' +process.argv[2];
var mongo = require('mongodb').MongoClient;

mongo.connect(url, function(err, db) {
	if (err) throw err;
      // db gives access to the database
	var coll = db.collection(process.argv[3]);
	coll.count({_id:process.argv[4]},  function(err, count) {
		if (err) throw err;
		console.log(count);  	
		db.close();
	})
});


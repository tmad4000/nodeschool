var url = 'mongodb://localhost:27017/learnyoumongo';
var mongo = require('mongodb').MongoClient;
var doc = {
		firstName: process.argv[2],
		lastName: process.argv[3]
  };
mongo.connect(url, function(err, db) {
	if (err) throw err;
      // db gives access to the database
	var Docs = db.collection('docs');
	Docs.insert(doc, function(err, data) {
		if (err) throw err;
		console.log(JSON.stringify({
		firstName: process.argv[2],
		lastName: process.argv[3]

  }));  	
		db.close();
	})
});




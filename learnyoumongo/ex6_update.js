var url = 'mongodb://localhost:27017/' +process.argv[2];
var mongo = require('mongodb').MongoClient;

mongo.connect(url, function(err, db) {
	if (err) throw err;
      // db gives access to the database
	var users = db.collection('users');
	users.update({username:"tinatime"}, 
	{
		$set: {
			age:40
		}
	}, function(err, data) {
		if (err) throw err;
		// console.log(JSON.stringify(data));  	
		db.close();
	})
});




var url = 'mongodb://localhost:27017/learnyoumongo';

var mongo = require('mongodb').MongoClient;

mongo.connect(url, function(err, db) {
	if (err) throw err;
      // db gives access to the database
	var coll = db.collection('prices');

	// [
	//  { status: 'A', value: 1 },
	//  { status: 'B', value: 2 },
	//  { status: 'A', value: 10 }
	// ]

	coll.aggregate([
	  { $match: { size: process.argv[2] }}
	, { $group: {
	    _id: 'avgprice' // This can be an arbitrary string in this case
	  , avgprice: {
	      // $sum is the operator used here
	      $avg: '$price'
	    }
	  }}
	]).toArray(function(err, results) {
		if (err) throw err;
		if(!results.length)
			throw new Error("no results")

	  // handle error
	  console.log(Number(results[0].avgprice).toFixed(2))
	  // => [
	  // =>   { _id: 'total', total: 11 }
	  // => ]
	  db.close();

	})


});




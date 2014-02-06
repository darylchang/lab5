var data = require("../data.json");

exports.addFriend = function(req, res) {  
	var name = req.query.name;
	var description = req.query.description;
	var newFriend = {
		'imageURL' : 'http://lorempixel.com/400/400/people',
		'name' : name,
		'description': description
	}

	data['friends'].push(newFriend);
	res.render('add');
 }

var Game     = require('./models/game');
var Facility = require('./models/facility');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests

	app.get('/', function(req, res) {
		res.sendfile('./public/index.html');
	});

	app.put('/games',function(req,res){
		
		var game = new Game();
		game.name = "Games"
		// res.json({message:game.name});


		game.save(function(err){
			if(err)
				res.send(err);
			res.json({message: 'Game created'});
		});
	});

	app.get('/games',function(req,res){
		Game.find(function(err, games) {
			if (err)
				res.send(err);
			res.json(games);
		});
	});

	app.get('/games/:game_id',function(req, res) {
		Game.findById(req.params.game_id, function(err, game) {
			if (err)
				res.send(err);
			res.json(game);
		});
	});

	app.get('/facilities',function(req,res){
		res.json({message:'Here\'s the facilites'});
		Facility.find(function(err,games){
			if(err)
				res.send(err);
			res.json(games);
		});
	});

	app.put('/facilities/:fac_id',function(req,res){

	});

	app.get('/facilites/:fac_id',function(req,res){
		Facility.findById(req.params.fac_id,function(err,facility){
			if (err)
				res.send(err);
			res.json(facility);
		});
	});

	app.get('/users',function(req,res){

	});

	app.get('/users/:user_id',function(req,res){

	});

	app.post('/')







// app.get('/', function(req, res) {
// 	res.json({ message: 'hooray! welcome to our api!' });	
// });

// // on routes that end in /bears
// // ----------------------------------------------------
// router.route('/bears')

// 	// create a bear (accessed at POST http://localhost:8080/bears)
// 	.post(function(req, res) {
		
// 		var bear = new Bear();		// create a new instance of the Bear model
// 		bear.name = req.body.name;  // set the bears name (comes from the request)

// 		bear.save(function(err) {
// 			if (err)
// 				res.send(err);

// 			res.json({ message: 'Bear created!' });
// 		});

		
// 	})

// 	// get all the bears (accessed at GET http://localhost:8080/api/bears)
// 	.get(function(req, res) {
// 		Bear.find(function(err, bears) {
// 			if (err)
// 				res.send(err);

// 			res.json(bears);
// 		});
// 	});

// // on routes that end in /bears/:bear_id
// // ----------------------------------------------------
// router.route('/bears/:bear_id')

// 	// get the bear with that id
// 	.get(function(req, res) {
// 		Bear.findById(req.params.bear_id, function(err, bear) {
// 			if (err)
// 				res.send(err);
// 			res.json(bear);
// 		});
// 	})

// 	// update the bear with this id
// 	.put(function(req, res) {
// 		Bear.findById(req.params.bear_id, function(err, bear) {

// 			if (err)
// 				res.send(err);

// 			bear.name = req.body.name;
// 			bear.save(function(err) {
// 				if (err)
// 					res.send(err);

// 				res.json({ message: 'Bear updated!' });
// 			});

// 		});
// 	})

// 	// delete the bear with this id
// 	.delete(function(req, res) {
// 		Bear.remove({
// 			_id: req.params.bear_id
// 		}, function(err, bear) {
// 			if (err)
// 				res.send(err);

// 			res.json({ message: 'Successfully deleted' });
// 		});
// 	});


};
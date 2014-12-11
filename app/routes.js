
var Game     = require('./models/game');
var Facility = require('./models/facility');
var User = require('./models/user');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests

	app.get('/', function(req, res) {
		res.sendfile('./public/index.html');
	});
    
//////////////////////////////////////////////////////////////////    
////GAMES/////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////   
    

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
    
    app.put('/games/:name/:location/:ownerId/:start/:end/:people',function(req,res){
		
		var game = new Game();
		game.name = req.params.name;
        game.location = req.params.location;
        game.ownerId = req.params.ownerId;
        game.start = req.params.start;
        game.end = req.params.end;
        
		// res.json({message:game.name});


		game.save(function(err){
			if(err)
				res.send(err);
			res.json({message: 'Game created'});
		});
	});
    
    app.delete('/games/:game_id',function(req,res){
        Game.remove({
 			_id: req.params.game_id
 		}, function(err, game) {
 			if (err)
 				res.send(err);
 			res.json({ message: 'Successfully deleted' });
 		});
    });

//////////////////////////////////////////////////////////////////    
////FACILITIES////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
    
	app.get('/facilities',function(req,res){
		Facility.find(function(err,facilities){
			if(err)
				res.send(err);
			res.json(facilities);
		});
	});

    app.get('/facilites/:fac_id',function(req,res){
		Facility.findById(req.params.fac_id,function(err,facility){
			if (err)
				res.send(err);
			res.json(facility);
		});
	});

    
	app.put('/facilities/:name/:address/:phone',function(req,res){
        var facility = new Facility();
        facility.name = req.params.name;
        facility.location = req.params.location;
        facility.phone = req.params.phone;
        
        facility.save(function(err){
           if(err)
               res.send(err);
            res.json({message: 'Facility created'});
        });
	});
    
    app.delete('/facilities/:facility_id',function(req,res){
        Facility.remove({
 			_id: req.params.facility_id
 		}, function(err, user) {
 			if (err)
 				res.send(err);

 			res.json({ message: 'Successfully deleted' });
 		});
    });


//////////////////////////////////////////////////////////////////    
////USERS/////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
    
	app.get('/users',function(req,res){
        User.find(function(err,users){
			if(err)
				res.send(err);
			res.json(users);
		});
	});

	app.get('/users/:user_id',function(req,res){
		User.find({fbUserId: req.params.user_id},function(err,user){
			if (err)
				res.send(err);
			res.json(user);
		});
	});

	app.put('/users/:fbUserId/:email/:phone',function(req,res){
		User.update({ fbUserId: req.params.fbUserId},
		{
			$set: {
					email: req.params.email,
					phone: req.params.phone
				}	
		})
		res.json({message: 'User updated'});
	});
    
    app.put('/users/:firstName/:lastName/:email/:phone/:loggedIn/:fbUserId',function(req,res){
        var user = new User();
        user.firstName = req.params.firstName;
        user.lastName = req.params.lastName;
        user.email = req.params.email;
        user.phone = req.params.phone;
        user.loggedIn = req.params.loggedIn;
        user.fbUserId = req.params.fbUserId;
        
        user.save(function(err){
           if(err)
               res.send(err);
            res.json({message: 'User created'});
        });
    });

    app.delete('/users/:user_id',function(req,res){
        User.remove({
 			fbUserId: req.params.user_id
 		}, function(err, user) {
 			if (err)
 				res.send(err);

 			res.json({ message: 'Successfully deleted' });
 		});
    });


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
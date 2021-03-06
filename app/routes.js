
var Game     = require('./models/game');
var Facility = require('./models/facility');
var User = require('./models/user');
var Court = require('./models/court');
//var Calendar = require('./models/calendar');

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
    
    app.get('/games/user/:user_id',function(req,res){
        Game.find({fbUserId:req.params.user_id}, function(err,games){
            if(err)
                res.send(err);
            res.json(games);
        });
    });
    
    app.put('/games/:name/:location/:userId/:start/:end/:people/:courtId/:open/:image',function(req,res){
		
		var game = new Game();
		game.name = req.params.name;
        game.location = req.params.location;
        game.fbUserId = req.params.userId;
        game.start = req.params.start;
        game.end = req.params.end;
        game.courtId = req.params.courtId;
        game.open = req.params.open;
        game.image = req.params.image;
        
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

    app.get('/facilites/:id',function(req,res){
		Facility.find({id: req.params.id},function(err,facility){
			if (err)
				res.send(err);
			res.json(facility);
		});
	});

    
	app.put('/facilities/:name/:hours/:phone/:id/:image/:url',function(req,res){
        var facility = new Facility();
        facility.name = req.params.name;
        facility.hours = req.params.hours;
        facility.phone = req.params.phone;
        facility.id = req.params.id;
        facility.image = req.params.image;
        facility.url = req.params.url;
        
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

	app.post('/users/update/:fbUserId/:email/:phone/:firstName/:lastName/:loggedIn',function(req,res){
 		
 		User.remove({
 			fbUserId: req.params.fbUserId
 		}, function(err, user) {
 			if (err)
 				res.send(err);
 		});

		var user = new User();
    user.firstName = req.params.firstName;
    user.lastName = req.params.lastName;
    user.email = req.params.email;
    user.phone = req.params.phone;
    user.picture = req.params.picture;
    user.loggedIn = req.params.loggedIn;
    user.fbUserId = req.params.fbUserId;
    
    user.save(function(err){
       if(err)
           res.send(err);
        res.json({message: 'User updated'});
    });

 	});
    
    app.put('/users/:firstName/:lastName/:email/:phone/:picture/:loggedIn/:fbUserId',function(req,res){
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
 			_id: req.params.user_id
 		}, function(err, user) {
 			if (err)
 				res.send(err);

 			res.json({ message: 'Successfully deleted' });
 		});
    });
    

//////////////////////////////////////////////////////////////////    
////COURTS/////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
    app.get('/courts',function(req,res){
      Court.find(function(err,courts){
			if(err)
				res.send(err);
			res.json(courts);
		});
	});
    
    app.get('/courts/:courtName',function(req,res){
		Court.find({name : req.params.courtName},function(err,court){
			if (err)
				res.send(err);
			res.json(court);
		});
	});
    
    app.get('/courts/fac/:facId',function(req,res){
        Court.find({facId : req.params.facId},function(err,court){
			if (err)
				res.send(err);
			res.json(court);
		});
    });

    app.post('/courts/:name/:facId/:image',function(req,res){
    	Court.remove({
 			name: req.params.name
	 		}, function(err, court) {
	 			if (err)
	 				res.send(err);
	 		});

	 		var court = new Court();
      court.name = req.params.name;
      court.facId = req.params.facId;
      court.image = req.params.image;
      
      court.save(function(err){
         if(err)
             res.send(err);
          res.json({message: 'Court updated'});
      });

    });
    
    app.put('/courts/:name/:facId/:image/:id',function(req,res){
        var court = new Court();
        court.name = req.params.name;
        court.facId = req.params.facId;
        court.image = req.params.image;
        court.id = req.params.id;
        
        court.save(function(err){
           if(err)
               res.send(err);
            res.json({message: 'Court created'});
        });
    });

    app.delete('/courts/:court_id',function(req,res){
        Court.remove({
 			_id: req.params.court_id
 		}, function(err, court) {
 			if (err)
 				res.send(err);

 			res.json({ message: 'Successfully deleted' });
 		});
    });


//////////////////////////////////////////////////////////////////    
////Calendars/////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
 //    app.get('/calendars/fac/court/:facId/:courtId',function(req,res){
 //      Calendar.find({facId : req.params.facId},function(err,calendars){
	// 		if(err)
	// 			res.send(err);
	// 		res.json(calendars);
	// 	});
	// });
    
 //   /* app.get('/calendars/:courtId',function(req,res){							// return calendar of specific court
	// 	Court.find({courtId :req.params.courtId,function(err,court){
	// 		if (err)
	// 			res.send(err);
	// 		res.json(court);
	// 	});
	// });*/
    
 //    app.get('/calendars/fac/:facId',function(req,res){						// return all calendars of a given facility
 //        Court.find({facId : req.params.facId},function(err,court){
	// 		if (err)
	// 			res.send(err);
	// 		res.json(court);
	// 	});
 //    });
    
 //    app.put('/courts/:name/:facId/:image',function(req,res){
 //        var court = new Court();
 //        court.name = req.params.name;
 //        court.facId = req.params.facId;
 //        court.image = req.params.image;
        
 //        court.save(function(err){
 //           if(err)
 //               res.send(err);
 //            res.json({message: 'Court created'});
 //        });
 //    });

 //    app.delete('/courts/:court_id',function(req,res){
 //        Court.remove({
 // 			_id: req.params.court_id
 // 		}, function(err, court) {
 // 			if (err)
 // 				res.send(err);

 // 			res.json({ message: 'Successfully deleted' });
 // 		});
 //    });
    
    
    
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
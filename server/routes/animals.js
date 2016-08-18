var express = require('express');

var router = express.Router();
//bringing in the random router;
var randomNumber = require('./random');

var pg = require('pg');

var connectionString = 'postgres://localhost:5432/omicron';

router.get('/', function(req, res){
  pg.connect(connectionString, function(err, client, done){
    if(err){
      res.sendStatus(500);
    }

    client.query('SELECT * FROM zoo', function(err, result){
      if(err){
        res.sendStatus(500);
      }

      res.send(result.rows);
    });
  });
});


router.post('/', function(req, res){
  var animal = req.body;
  var total = randomNumber;
  console.log(total);

  pg.connect(connectionString, function(err, client, done){
    if(err){
      res.sendStatus(500);
    }
    client.query('INSERT INTO zoo (animal, total)'
                + 'VALUES ($1, $2)',
                [animal.animal, total],
                function(err, result){
                  done();

                  if(err){
                    res.sendStatus(500);
                  }
                  res.sendStatus(201);
                });
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://marcjerome123:Password@cluster0.texb4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// var url = "mongodb+srv://marcjerome123:Newlife14!@cluster0.texb4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
var ssn;


/* GET home page. */
router.get('/', function(req, res, next) {
   ssn = req.session;
  res.render('logInBus');

});


router.post('/', function(req, res) {
  
  ssn = req.session;
  ssn.name = req.body.femail;
  ssn.firstName = req.body.textmail;
 var password = req.body.psw;

    MongoClient.connect(url, function(err, db){
    
       if (err) 
      throw err;
        var database = db.db ('finalProject');
         //  var query = {textmail: ssn.firstName, psw: password};
        var query = ({ $and:[{textmail: ssn.firstName, psw: password}]});

        database.collection('users').count(query,function(err,result){

          if(err) throw err;
          console.log(err);
          
          if(result) {
          
             console.log(result.psw);
             res.redirect('profile');
          }
          
          else { /// they do not exist so insert new user
          var userobj = {textmail:ssn.firstName,psw:password};
          database.collection('users').findOne(userobj, function(err, res){
             if (err) throw err;
          console.log("New collections")
             db.close();
          
          });
          res.render('signUp', {error:'Please Sign up !! '});
          }
          });
          });
          });
          module.exports = router;
 
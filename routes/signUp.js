var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://marcjerome123:Password@cluster0.texb4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// var url = "mongodb+srv://marcjerome123:Newlife14!@cluster0.texb4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
var ssn;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signUp');
});


 router.post('/', function(req, res, next) {


   ssn = req.session;
   ssn.firstName = req.body.textmail;
  var password = req.body.psw;

MongoClient.connect(url, function(err, db){
    
  if (err) 
 throw err;
   var database = db.db ('finalProject');
   var query =  ({$and:[{textmail: ssn.firstName}, {psw : password}]});

// // // //     var userobj = {fname:sessionStorage.firstName, lname:ssn.lastName, email:ssn.formpass1}
database.collection('users').findOne(query,function(err,result){

if(err) throw err;
console.log(err);

if(result) {

   console.log(result.femail);
   res.render('logIn', {error2: " Please log in "});
}

else { /// they do not exist so insert new user
var userobj = {textmail:ssn.firstName,psw:password};
database.collection('users').insertOne(userobj, function(err, res){
   if (err) throw err;
console.log("New collections")
   db.close();

});
res.redirect('profile');
}
});
});
});
module.exports = router;
var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://marcjerome123:Password@cluster0.texb4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
var url = "mongodb+srv://marcjerome123:Newlife14!@cluster0.texb4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
var ssn;

/* GET home page. */
router.get('/', function(req, res, next) {
  ssn = req.session;
  res.render('profile', {textmail: ssn.firstName });
});

 router.post('/', function(req, res, next) {
  
  
ssn = req.session;
  
ssn.firstName = req.body.textmail;
var password = req.body.psw;

MongoClient.connect(url, function(err, db){
  
if (err) 
throw err;
var database = db.db ('finalProject');
var userobj = { femail:ssnname, psw:password};


database.collection('users').findOne(userobj,function(err,info){

if(err) throw err;
if (info){
  
console.log(info.lname);

res.render('profile');

}else {

throw err;
   
    
}
 res.redirect('logIn');
 });
 });  

 });


module.exports = router;
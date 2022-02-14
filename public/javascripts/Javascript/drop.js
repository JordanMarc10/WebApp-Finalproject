var MongoClient = require('mongodb').MongoClient;

var url = "mongodb+srv://marcjerome123:Password@cluster0.krrrd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db){

    if(err)
        throw err;
    var database = db.db ('NodeJSClassProject');

     var query = '';


    database.collection('products').drop(query),(function(err, res){
        if(err) throw err;

        if(res) 
        console.log("GOODBYE USERS!");
       
        db.close();
       });
       
    });
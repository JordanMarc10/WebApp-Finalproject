//mongodb+srv://marcjerome123:<password>@cluster0.krrrd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://marcjerome123:Password@cluster0.krrrd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db){



    
    })

    // do whatever you need to do with DB here
    console.log("Connected to the server of MongoDB!!");
    db.close();


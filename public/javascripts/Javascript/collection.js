var MongoClient = require('mongodb').MongoClient;

var url = "mongodb+srv://marcjerome123:Password@cluster0.krrrd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db){

    if(err) db.db = !method == true;
         

    var database = db.db ('NodeJSClassProject');
    var server = getcollection.MongoClient;



    database.createCollection(decodeUri,(result, res) => {
            // database.createCollection('products' ,function(err, res){
            if (err)
                localStorage = null;


                console.log(res.MongoClient.i + db.logout);
            //console.log(res.MongoClient.i + " New Collection Created");
            db.close();
        });
    
    // do whatever you need to do with DB here
   

});

/// inserting info on Mongodb
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb+srv://marcjerome123:Password@cluster0.krrrd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db){

    if(err)
        throw err;
    var database = db.db ('NodeJS');
    var query = {firstName: /^A/i};
    database.collection('products').deleteMany(query).toArray(function(err, res){

        if(err) throw err;
        console.log(res.deletedCount + "product(s) were deleted!");
        db.close();


    })

});
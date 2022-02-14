var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://marcjerome123:Password@cluster0.krrrd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


MongoClient.connect(url, function(err, db){

    if(err)
        throw err;

        var database = db.db('NodeJSClassProject');
        var query =  {firstName: 'Amy'};
        var newVal = {$set: {firstName: "This has been updated", country: "Egypt", age:86}};

        database.collection('products').updateMany(query, newVal, function (err,res){

            if (err) throw err;
            console.log(res.modifiedCount + " One of the document is updated");
            db.close();

        });
});
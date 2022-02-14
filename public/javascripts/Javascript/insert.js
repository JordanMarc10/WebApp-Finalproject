var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://marcjerome123:Password@cluster0.krrrd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


MongoClient.connect(url, function(err, db){

    if(err)
        throw err;

        var database = db.db('NodeJSClassProject');
        var userobj = [
           
            {
                id:1,
                firstName:"Alice",lastName:"Hello", city: "Montreal", age:76, phone: "43744688999"
            },
            {
                id:2,
                firstName:"Amy",lastName:"Node", city: "Toronto", age:35, phone: "43747229999"
            },{
                id:3,
                firstName:"John",lastName:"Matters", city: "London", age:96, phone: "43747833999"
            },{
                id:4,
                firstName:"Amy",lastName:"Smith", city: "Paris", age:176, phone: "43747859999"
            },
           
        ]
        database.collection('products').insertMany(userobj),(function(err, res){

            if (err) throw err;
            console.log(" Many users added to the products collection!");
            db.close();
        });

    


});
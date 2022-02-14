var MongoClient = require('mongodb').MongoClient;

var url = "mongodb+srv://marcjerome123:Password@cluster0.krrrd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db){

    if(err)
        throw err;
    var database = db.db ('NodeJSClassProject');


//     var query = 
    
//     {$and:[
//        {$or: [{city:'Paris'},
//        {city:'Toronto'}
//     ]}, 
//   // {age:25},
//    {firstName: /^T/i}
//     ]};

    
    var query = {$or: [{city:'Paris'}, {lastName:'Smith'}]};
   // {$and: [{$or:[{age:{$in:{$gte:70}}}, {age:{$in:{$lt:45}}} ]}]};

    // {$or:[{age:{$gte:70}}, {age:{$lt:45}} ]};
   
     // {$in:[{$or:{age:{$gte:25}}}, {age:{$lt:25}} ]};
    //{$and: [{city:'Paris', $exists:true }, {city:'Toronto', $exists:true} , {Age: $exists:true}}]  };

//    database.collection('products').find(query).toArray(function(err, res){
    database.collection('products').find(query).limit(2).toArray(function(err, res){
    if(err) throw err;
    console.log(res);
    db.close();
   });
   
});


// MongoClient.connect(url, function(err, db){

//     if(err)
//         throw err;
//     var database = db.db ('NodeJSClassProject');

//     if(err) throw err;
//     console.log(res);
//     db.close();
//    });
   


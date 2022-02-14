
var http = require('http');
var fs = require('fs');
var formidable = require('formidable');


http.createServer(function(req,res){
   
    if (req.url == '/signup'){

        var form = new formidable.IncomingForm();
        form.parse(req, function(err,fields,files){

            var fname = fields.firstName;
            var lname = fields.lastName;

        
    res.writeHead(200, {'Content-Type': 'text/html' });
    res.write("Welcome " + fname + " " + lname + "!");

    var oldPath = files.photo.filepath;
    var newPath = 'C:/Users/jorda/Desktop/NodeJS' + files.photo.originalFilename;
    fs.rename(oldPath, newPath, function(err){

       // if (err) throw err;
        res.write('<br><h2>The path of uploaded photo was successfully Created !</h2>');
        res.write(oldPath + ' ' + newPath);
        res.end();
    })

       
});
    } else {

    res.writeHead(200, {'Content-Type': 'text/html' });
    res.write("<form action='signup' method='post' enctype='multipart/form-data'>");
    res.write("<p><input type='text' name='firstName' placeholder='Your first name'/></p>");
    res.write("<p><input type='text' name='lastName' placeholder='Your last name'/></p>");
    res.write("<p><input type='file' name='photo'</p>");
    res.write("<p><input type='submit' name='submit'</p>");
    res.write("</form>");
     res.end();
   
}
}).listen(3000);


console.log("Server3.js is running....");
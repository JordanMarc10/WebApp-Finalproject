var express = require('express');
var router = express.Router();


// to recieve email from gmail
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user:'triosstudent3@gmail.com',
    pass: 'Newlife14!'
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('form');
  next();
});

router.post('/',function(req, res, next){


// res.render('contact', {message:"The form has been submitted"});
//res.send('contact');

// receive the content from the form page
var fullName = req.body.user;
var email = req.body.email;
var message = req.body.form;

var mailOptions = {
  from : 'triosstudent3@gmail.com', // where the email is coming from 
  to: 'jordanjerome411@gmail.com', // where the email goes to 
  subject: 'Contact Message from:' + fullName ,
  text: 'Message:' + message + '\n From ' + email
};

transporter.sendMail(mailOptions, function(err, info){
  if (err){
    console.log(err);
    res.render('form', {error:"Something went wrong!"});
  }else {
    console.log(info);
    res.render('form', {message:"email has been sent!"});
  }
})
});

module.exports = router;
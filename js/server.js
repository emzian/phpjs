
var express = require("express");
var greeter = require("./lib/greeter");
var tweet   = require("./lib/tweet");
var fs      = require('fs');
var fsp     = require("q-io/fs");

var app = express();

var hello = greeter("hello");


app.get("/", function (req , res) {
  res.send(hello("Express"));
});

app.get("/hello/:from", function (req , res) {
  res.send(hello(req.params.from.toUpperCase()));
});

app.get("/async/tweets/?(:id)?" , function (req , res) {

  //asynchronous read
   fs.readFile("./lib/tweets.json", function(error , result){

     if(error){
       req.send(error);
       return;
     }

     var tweets = JSON.parse(result.toString());

     if(!req.params.id){
         res.send(tweets);
         return;
     }

     var twt = tweets[req.params.id];
     twt.id = req.params.id;
     res.send(tweet.prototype.getJSON.call(twt));

   });


});

app.get("/sync/tweets/?(:id)?" , function (req , res) {

  // synchronous read
  var tweets = JSON.parse(fs.readFileSync("./lib/tweets.json"));
  if(!req.params.id){
      res.send(tweets);
      return;
  }

  var twt = tweets[req.params.id];
  twt.id = req.params.id;
  res.send(tweet.prototype.getJSON.call(twt));


});


app.get("/promise/tweets/?(:id)?" , function(req , res){

  fsp.read("./lib/tweets.json" , "b")

  .then(function(result){

    var tweets = JSON.parse(result.toString());

    if(!req.params.id){
        res.send(tweets);
        return;
    }

    var twt = tweets[req.params.id];
    twt.id = req.params.id;
    res.send(tweet.prototype.getJSON.call(twt));

  });
});




app.listen(3000);

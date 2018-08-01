const fs = require('fs');
const http = require('http');
const express = require('express');

var app=express();


app.use("/stylesheet",express.static(__dirname+"/stylesheet"))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/candidates",function(req,res){
  res.writeHead(200,{"Content-Type":"application/json"})
  fs.createReadStream(__dirname+"/data.json").pipe(res);

});
app.get("/jobs",function(req,res){
  res.writeHead(200,{"Content-Type":"application/json"})
  fs.createReadStream(__dirname+"/dataj.json").pipe(res);

});
app.listen(3050);

//
// var server=http.createServer(function(req,res){
//   res.writeHead(200,{"Content-Type":"text/html"})
//   if(req.url === '/'){
//     fs.createReadStream(__dirname+"/index.html").pipe(res);
//   }
//   else if(req.url === '/about'){
//
//     fs.createReadStream(__dirname+"/about.html").pipe(res);
//
//   }
//   else{
//     fs.createReadStream(__dirname+"/404.html").pipe(res);
//   }
// });
//
//
// server.listen(3050);
console.log("server staarted at 3050");
//var write=fs.createWriteStream("output2.txt")


/*
fs.readFile("file.txt","utf8",function(err,data){
  console.log(data);

})
*/

console.log("done");

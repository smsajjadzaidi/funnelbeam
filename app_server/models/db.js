var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gracefulShutdown;
var dbURI = "mongodb://localhost:27017/funnelb";

 
mongoose.connect(
  dbURI);
mongoose.connection.on("connected", function() {
  console.log("Mongoose connected to " + dbURI); 
});
mongoose.connection.on("error", function(err) {
  console.log("Mongoose connection error: " + err);
});
mongoose.connection.on("disconnected", function() {
  console.log("Mongoose disconnected");
});

gracefulShutdown = function(msg, callback) {
  mongoose.connection.close(function() {
    console.log("Mongoose disconnected through " + msg);
    callback();
  });
};

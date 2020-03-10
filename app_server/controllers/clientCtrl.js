
var mongoose = require('mongoose');
var cli = require('../models/client');


var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};


module.exports.getAllClients = function(req, res) {
    console.log('Finding all clients');
    cli
        .find()
        .exec(function(err,client) {
          if (err) {
            console.log(err);
            sendJSONresponse(res, 404, err);
            return;
          }
          sendJSONresponse(res, 200, client);
        });
    
};

module.exports.getClient = function(req, res) {
    console.log('Finding all client');
    cli
        .find({name : req.params.name})
        .exec(function(err,client) {
          if (err) {
            console.log(err);
            sendJSONresponse(res, 404, err);
            return;
          }
          sendJSONresponse(res, 200, client);
        });   
};

module.exports.editClient = function(req, res) {
    console.log('edit client');
    cli
        .findOne({name : req.params.name})
        .exec(function(err,client) {
            if (!client) {
                sendJSONresponse(res, 404, {
                  "message": "email not found"
                });
                return;
              } else if (err) {
                sendJSONresponse(res, 400, err);
                return;
            }
            var errors = false;
            var messages = [];
           
            if(req.body.name == ""){
                messages.push("Invalid name");
                errors = true;
            }
             
            if(errors){
                sendJSONresponse(res,404,messages)
            }
            else{
              
                client.name = req.body.name;

                client.save(function(err, client) {
                    if (err) {
                    sendJSONresponse(res, 404, err);
                    } else {
                    sendJSONresponse(res, 200, client);
                    }
                });
            }
        }
    );
};

module.exports.insertClient = function(req, res) {
     
    var errors = false;
    var messages = [];
    
    if(req.body.name == ""){
        messages.push("Invalid name");
        errors = true;
    }
    
    
    if(errors){
        sendJSONresponse(res,404,messages)
    }
    else{
        cli.create({
            
            name: req.body.name
          
        },function(err, client){
            if (err){
                sendJSONresponse(res,404,err);
            }
            sendJSONresponse(res,200,{"message": "Successfully Added" , "client" : client});
        });
    }
}
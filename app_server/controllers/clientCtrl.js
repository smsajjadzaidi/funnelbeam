
var mongoose = require('mongoose');
var clientModel = require('../models/client');


var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};


module.exports.GetAllClients = function(req, res) {
    console.log('Finding all clients');
    clientModel
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

module.exports.GetClient = function(req, res) {
    console.log('Finding all client');
    clientModel
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

module.exports.EditClient = function(req, res) {
    console.log('edit client');
    clientModel
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

module.exports.InsertClient = function(req, res) {
     
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
        clientModel.create({
            
            name: req.body.name
          
        },function(err, client){
            if (err){
                sendJSONresponse(res,404,err);
            }
            sendJSONresponse(res,200,{"message": "Successfully Added" , "client" : client});
        });
    }
}
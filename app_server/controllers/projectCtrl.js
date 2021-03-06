
var mongoose = require('mongoose');
var projectModel = require('../models/project');
var projectAssignmentsModel=  require('../models/projectAssignments');


var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};


module.exports.GetAllProjects = function(req, res) {
    console.log('Finding all projects');
    projectModel
        .find()
        .exec(function(err,project)
        {
            if (err)
            {
            console.log(err);
            sendJSONresponse(res, 404, err);
            return;
            }
            sendJSONresponse(res, 200, project);
        });   
};

module.exports.GetProject = function(req, res) {
    console.log('Finding a Project');
    projectModel
        .find({name : req.params.name})
        .exec(function(err,project) {
          if (err) {
            console.log(err);
            sendJSONresponse(res, 404, err);
            return;
          }
          sendJSONresponse(res, 200, project);
        });   
};

module.exports.EditProject = function(req, res) {
    console.log('edit project');
    projectModel
        .findOne({name : req.params.name})
        .exec(function(err,project) {
            if (!project) {
                sendJSONresponse(res, 404, {
                  "message": "email not found"
                });
                return;
            } 
            else if (err) 
            {
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
              
                project.name = req.body.name;
                project.save(function(err, project) {
                    if (err) {
                    sendJSONresponse(res, 404, err);
                    } else {
                    sendJSONresponse(res, 200, project);
                    }
                });
            }
        }
    );
};

module.exports.InsertProject = function(req, res) {
     
    var errors = false;
    var messages = [];
    
    if(req.body.name == ""){
        messages.push("Invalid name");
        errors = true;
    }

    if(req.body.CID == ""){
        messages.push("Invalid client name");
        errors = true;
    }
    
    if(errors){
        sendJSONresponse(res,404,messages)
    }
    else{
        projectModel.create({
            
            name: req.body.name
          
        },function(err, project){
            if (err){
                sendJSONresponse(res,404,err);
            }
            pa.create({
            
                PID: req.body.name,
                CID :req.body.CID
              
            },function(err, project){
                if (err){
                    sendJSONresponse(res,404,err);
                }
                sendJSONresponse(res,200,{"message": "Successfully Added" , "project" : project});
            });
            
        });
        
    }
}

module.exports.AssignProject = function(req, res) {
    var errors = false;
    var messages = [];
    
    if(req.body.name == ""){
        messages.push("Invalid name");
        errors = true;
    }

    if(req.body.CID == ""){
        messages.push("Invalid client name");
        errors = true;
    }
    
    
    if(errors){
        sendJSONresponse(res,404,messages)
    }
    else{
        projectAssignmentsModel.findOne({PID: req.body.name, CID: req.body.CID})
        .exec(function(err, project){
            if (err){
                sendJSONresponse(res,404,err);
            }
            project.EID = req.body.EID;
            project.save(function(err, p){
                if (err){
                    sendJSONresponse(res,404,err);
                } 
                sendJSONresponse(res,200,{"message": "Successfully Assigned" , "project" : p});
            });
        });       

    }
}

module.exports.DeassignProject = function(req, res) {
    var errors = false;
    var messages = [];
    
    if(req.body.name == ""){
        messages.push("Invalid project name");
        errors = true;
    }

    if(req.body.CID == ""){
        messages.push("Invalid client name");
        errors = true;
    }
  
    if(errors){
        sendJSONresponse(res,404,messages)
    }
    else{
        projectAssignmentsModel.findOne({PID: req.body.name, CID: req.body.CID, EID:req.body.EID})
        .exec(function(err, project){
            if (err){
                sendJSONresponse(res,404,err);
            }
            project.EID = "";
            project.save(function(err, p){
                if (err){
                    sendJSONresponse(res,404,err);
                } 
                sendJSONresponse(res,200,{"message": "Successfully Removed" , "project" : p});
            });
        });       
    }
}
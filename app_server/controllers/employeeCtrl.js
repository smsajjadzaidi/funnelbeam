
var mongoose = require('mongoose');
var emp = require('../models/employee');


var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};


module.exports.getAllEmployees = function(req, res) {
    console.log('Finding all employees');
    emp
        .find()
        .exec(function(err,employee) {
          if (err) {
            console.log(err);
            sendJSONresponse(res, 404, err);
            return;
          }
          sendJSONresponse(res, 200, employee);
        });
    
};

module.exports.getEmployee = function(req, res) {
    console.log('Finding all employees');
    emp
        .find({email : req.params.email})
        .exec(function(err,employee) {
          if (err) {
            console.log(err);
            sendJSONresponse(res, 404, err);
            return;
          }
          sendJSONresponse(res, 200, employee);
        });   
};

module.exports.editEmployee = function(req, res) {
    console.log('edit employee');
    emp
        .findOne({email : req.params.email})
        .exec(function(err,employee) {
            if (!employee) {
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
            if(req.body.email == "" || !(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(req.body.email)))
            {
                messages.push("Invalid email address");
                errors = true;
            }
            if(req.body.name == ""){
                messages.push("Invalid name");
                errors = true;
            }
            if(req.body.gender == "")
            {
                messages.push("Invalid gender");
                errors = true;
            }
            if(req.body.designation== "" )
            {
                messages.push("Invalid designation");
                errors = true;
            }
    
            if(errors){
                sendJSONresponse(res,404,messages)
            }
            else{
              
                employee.name = req.body.name;
                employee.designation = req.body.designation;
                employee.email = req.body.email;
                employee.gender = req.body.gender;
                
                employee.save(function(err, employ) {
                    if (err) {
                    sendJSONresponse(res, 404, err);
                    } else {
                    sendJSONresponse(res, 200, employ);
                    }
                });
            }
        }
    );
};

module.exports.insertEmployee = function(req, res) {
     
    var errors = false;
    var messages = [];
    if(req.body.email == "" || !(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(req.body.email)))
    {
        messages.push("Invalid email address");
        errors = true;
    }
    if(req.body.name == ""){
        messages.push("Invalid name");
        errors = true;
    }
    if(req.body.gender == "")
    {
        messages.push("Invalid gender");
        errors = true;
    }
    if(req.body.designation== "" )
    {
        messages.push("Invalid designation");
        errors = true;
    }
    
    if(errors){
        sendJSONresponse(res,404,messages)
    }
    else{
        emp.create({
            email: req.body.email,
            name: req.body.name,
            gender: req.body.gender,
            designation: req.body.designation
        },function(err, employee){
            if (err){
                sendJSONresponse(res,404,err);
            }
            sendJSONresponse(res,200,{"message": "Successfully Added" , "employee" : employee});
        });
    }
}
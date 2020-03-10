var mongoose = require("mongoose");
var employeeSchema = new mongoose.Schema({
    email: {type: String , lowercase: true, required: true, unique:true},
    name: {type: String , required: true},
    gender: {type: String , required: true},
    designation: {type: String , required: true},
});

module.exports = mongoose.model('Employee',employeeSchema);
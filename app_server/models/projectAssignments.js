var mongoose = require("mongoose");
var projectAssignmentSchema = new mongoose.Schema({
    
    PID: {type: String , required: true},
    CID: {type: String , required: true},
    EID: {type: String }
    
});

module.exports = mongoose.model('ProjectAssignment',projectAssignmentSchema);
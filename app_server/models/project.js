var mongoose = require("mongoose");
var projectSchema = new mongoose.Schema({
    name: {type: String , required: true, unique:true},
});

module.exports = mongoose.model('Project',projectSchema);
var mongoose = require("mongoose");
var clientSchema = new mongoose.Schema({
    
    name: {type: String , required: true, unique:true}
   
    
});

module.exports = mongoose.model('Client',clientSchema);
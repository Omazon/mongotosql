const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let agentSchema = new Schema({
    agent_code:{
        type: String,
        required: true
    },
    agent_name:{
        type: String,
        required: true
    },
    working_area:{
        type: String,
        required: true
    },
    commission:{
        type: Number
    },
    phone_no:{
        type: String
    },
    country:{
        type: String
    }
});

module.exports = mongoose.model('Agent', agentSchema);
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Registered Voters Schema / Document Structure

const registeredVotersSchema = new mongoose.Schema({
        Personalno : {
        type : String,
        required : true,
        },
        Account_Address : {
        type : String,
        required : true,
        },
        
})


// Create Model
const RegisteredVoters = new mongoose.model("REGISTERED_VOTERS", registeredVotersSchema);

module.exports = RegisteredVoters;
		
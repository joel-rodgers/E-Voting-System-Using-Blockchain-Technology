const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Personal Info Schema / Document Structure

const personalInfoSchema = new mongoose.Schema({
        Dob : {
        type : Date,
        required : true,
        },
        Email : {
        type : String,
        required : true,
        },
        Gender : {
        type : String,
        required : true,
        },
        Is_registered : {
        type : String,
        required : true,
        },
        Name : {
        type : String,
        required : true,
        },
        Personalno : {
        type : String,
        required : true,
        },
        Phoneno : {
        type : String,
        required : true,
        },


})


// Create Model
const Personal_Info = new mongoose.model("PERSONAL_INFO", personalInfoSchema);

module.exports = Personal_Info;
		
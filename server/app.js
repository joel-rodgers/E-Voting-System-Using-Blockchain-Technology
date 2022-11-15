// Import All Dependencies
const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();

// Configure ENV File & Require Connection File
dotenv.config({path : './config.env'});
require('./db/conn');
const port = process.env.PORT; 

// Require Model
const Users = require('./models/userSchema');

// These Method is Used to Get Data and Cookies from FrontEnd
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("Hello World");
})

// Registration
app.post('/register', async (req, res) => {
    try {
        // Get body or Data
        const firstname = req.body.firstname;
        const surname = req.body.surname;
        const email = req.body.email;
        const password = req.body.password;
        
        const createUser = new Users({
            firstname : firstname,
            surname : surname,
            email : email,
            password : password
        });

        //Save Method is Used to Create User or Insert User
        //But Before Saving or Inserting, Password will Hash
        //Because of Hashing. After Hash, It will save to DB
        const created = await createUser.save();
        console.log(created);
        res.status(200).send("Registered");

    } catch (error) {
        res.status(400).send(error)
    }
})

// Run Server
app.listen(port, ()=>{
    console.log("Server is Listening")
})
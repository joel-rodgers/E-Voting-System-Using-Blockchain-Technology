// Import All Dependencies
const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
/////

// Configure ENV File & Require Connection File
dotenv.config({path : './config.env'});
db=require('./db/conn');
const port = process.env.PORT; 

// Require Model
const Users = require('./models/userSchema');
const { application } = require('express');

// These Method is Used to Get Data and Cookies from FrontEnd
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());

app.use(cors({
    origin:'http://127.0.0.1:3000',
}))

app.get('/', (req, res) => {
    res.send("Hello World");
})

// Registration
app.post('/Register', async (req, res) => {
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

// Login User
app.post('/Login', async (req, res) => {
    try{
        const email = req.body.email;
        const password = req.body.password;

        // Find User if Exist
        const user = await Users.findOne({email : email});
        if(user){
            // Verify Password
            const isMatch = await bcryptjs.compare(password, user.password);

            if(isMatch){
                // Generate Token that is defined in User Schema
                const token = await user.generateToken();
                res.cookie("jwt", token, {
                    // Expires Token in 24 Hours
                    expires : new Date(Date.now() + 86400000),
                    httpOnly : true
                })
                res.status(200).send("LoggedIn")
            }else{
                res.status(400).send("Invalid Credentials");
            }
        }else{
            res.status(400).send("Invalid Credentials"); 
        }

    } catch (error) {
        res.status(400).send(error);
    }
})

//Login Admin
app.post('/Admin', async (req, res) => {
    try{
        const email = req.body.email;
        const password = req.body.password;

        // Find User if Exist
        const user = await Users.findOne({email : email});
        if(user){
            // Verify Password
            const isMatch = await bcryptjs.compare(password, user.password);

            if(isMatch){
                // Generate Token that is defined in User Schema
                const token = await user.generateToken();
                res.cookie("jwt", token, {
                    // Expires Token in 24 Hours
                    expires : new Date(Date.now() + 86400000),
                    httpOnly : true
                })
                res.status(200).send("LoggedIn")
            }else{
                res.status(400).send("Invalid Credentials");
            }
        }else{
            res.status(400).send("Invalid Credentials"); 
        }

    } catch (error) {
        res.status(400).send(error);
    }
})

const getAge = require('get-age');


const nodemailer = require('nodemailer');
const rand=Math.floor((Math.random() * 10000) + 54);
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'krypta370@gmail.com',
      pass: '61602345'
    }
  });


//User Registration as Voter
app.post('/voterRegistration', async (req, res) => {

    var account_address = req.body.account_address;
    var data = req.body.personalno ;

    
	const dob=[];
    data = req.body.personalno; //data stores personal no
	console.log(data)
    account_address = req.body.account_address; //stores metamask acc address



     
     db.personal_info.find({Personalno: data},(error,results) => {
		if (error){
			return console.error(error);
		}
		console.log(docs)
		dob = results[0].Dob;
		const email= results[0].Email;
		age = getAge(dob);
		is_registered=results[0].Is_registered;

		if (is_registered!='YES')
		{
			if (age>=18)
            {
			const mailOptions = {
				from:'krypta370@gmail.com',
				to: email,
				subject : "Please Confirm Your Email Account",
				text : "Hello, your otp is" +rand
		};
		transporter.sendMail(mailOptions, function(error, info)
		{
			if (error) {
				console.log(error);
			}
			else {
				console.log('Email sent:' + info.response);
			}
		});
		res.render('otp');
		}
		else //IF USER IS LESS THAN 18
		{
			res.send('You cannot vote as your age is less than 18');
		}
        }
	else // IF USER IS ALREADY REGISTERED
	{
		res.render('voterRegistration.jsx', {alertMsg:"You are already registered hence you cannot register again"});
	}
	
});
    
})

//OTP VERIFY
app.post('/otp', async (req, res) => {
    const otp=req.body.otp;
    if (otp==rand)
    {
      const record= {Account_address: account_address, Is_registered: 'Yes'};
    const mongo="db.registered_users.insertOne({ ? })";
    conn.query(mongo,record, function(err2, res2)
      {
          if (err2){
              throw err2;
          }
              else{
                  const mongo1 = "db.personal_info.updateOne({Personalno: ?}, {$set: {Is_registered: ?}})";
                  const record1 =['YES',data]
                  console.log(data)
                  conn.query(mongo1,record1,
                  function(err1,res1)
                  {
                      if (err1) {
                          res.render('voterRegistration.jsx');
                      }
                      else{
                          console.log("1 record updated");
                          const msg= "You are Successfully registered";
                          res.render('voterRegistration.jsx', {alertMsg:msg})
                      }
                  });
              }
          });
      }
      else
      {
          res.render('voterRegistration.jsx', {alertMsg:"Session Expired!, You have entered the wrong OTP"});
      }


});




// Run Server
app.listen(port, ()=>{
    console.log("Server is Listening")
})
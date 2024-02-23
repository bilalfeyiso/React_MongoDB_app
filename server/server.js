const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./model/Users')
//const dotenv = require('dotenv')


const app = express()
app.use(cors())
app.use(express.json())
//dotenv.config({path: `config.env`});
//const PORT = process.env.PORT || 4000


//check here connection to mongodb
mongoose.connect("mongodb+srv://billyadmin:billyf2424@clusters.khjuoyp.mongodb.net/dashapp")

//api

//get all user
app.get('/', (req, res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// get a single user
app.get('/getUser/:id', (req, res) =>{
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// create user
app.post("/createUser", (req,res) =>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


// update a user 
app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id}, {
        
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        street: req.body.street,
        houseNumber: req.body.houseNumber,
        zipCode: req.body.zipCode,
        city: req.body.city,
        userEmail: req.body.userEmail,
        gender: req.body.gender,
        status: req.body.status,
        typesOfMembership: req.body.typesOfMembership
    })
    .then(users => res.json(users))
    .catch(err => res.json(err))
})



// Delete the user

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))  
})





app.listen(4000, () => {
    console.log(`server is Running on http://localhost: ${5000}`)
})
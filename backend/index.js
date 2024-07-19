/*import express from 'express';
import { MongoDBURL, PORT } from "./config.js";
import mongoose from "mongoose";*/

console.log("Hi There!");

const express = require('express')
const cors = require('cors');
const app =express()


const mongoose = require('mongoose');
const UserModel = require('./users.js');

app.use(express.json())
app.use(cors());
mongoose.connect("mongodb+srv://rick119:rick119merntut1@cluster0.0ztzylx.mongodb.net/merntut?retryWrites=true&w=majority&appName=Cluster0");

async function getData(req, res) {
    try {
        const data = await UserModel.find(); // Find all documents
        res.json(data); // Send the data as JSON response
    } catch (error) {
        res.status(500).send(error.message); // Handle any errors
    }
}

async function createData(req,res){
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user)
}

app.get("/getUsers",getData)
app.post("/createUsers",createData)
app.listen(3001,()=>{
    console.log("Server running perfectly")
});
/*
const app= express();

app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send("MERN BOOK STORE");
})



mongoose
.connect(MongoDBURL)
.then(()=>{
    console.log("Database connected successfully");
    
    app.listen(PORT,()=>{
        console.log("listening at port  : " + PORT);
    });
})
.catch((error)=>{
 console.log(error);
});
*/

import express, { Request, Response } from 'express';
import { MongoDBURL, PORT } from "./config";
import mongoose from "mongoose";
import UserModel from "./schemas/users";
import dashboardExpensesModel from './schemas/financeRecordsSchema';

console.log("Hi There!");

/*const express = require('express')*/
const cors = require('cors');
const app =express()


/*const mongoose = require('mongoose');*/
/*const UserModel = require('./users.js');*/

app.use(express.json())
app.use(cors());
mongoose.connect(MongoDBURL)
.then(()=>{
    console.log("MONGODB connected successfully")
})
.catch((err)=>{
    console.log("MONGODB error: ",err)
})

async function getData(req:Request, res:Response) :Promise<void>{
    try {
        const data = await UserModel.find(); // Find all documents
        res.json(data); // Send the data as JSON response
    } catch (error) {
        res.status(500).send(error); // Handle any errors
    }
}

async function createData(req:Request,res:Response):Promise<void>{
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user)
}

app.get("/getUsers",getData)
app.post("/createUsers",createData)

/*dashboard*/
async function createRecord (req:Request,res:Response):Promise<void>{
const record = req.body;
const newRecord = new dashboardExpensesModel(record);
newRecord.save()
res.json(record)
}

async function getRecord(req: Request, res: Response): Promise<void>{
try{
//const userId=req.query.userId as string
//const data=await dashboardExpensesModel.findById({userId});
const data=await dashboardExpensesModel.find();
res.json(data)

}
catch(err){
res.status(404).send(err)
}
}

app.get("/getRecord",getRecord)
app.post("/createRecord",createRecord)

app.listen(PORT,()=>{
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
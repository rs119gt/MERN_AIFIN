import express from 'express';
import { MongoDBURL, PORT } from "./config.js";
import mongoose from "mongoose";

console.log("Hi There!");
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
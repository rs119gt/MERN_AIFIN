import mongoose from "mongoose";

interface dashboardExpenses{
    userId:String,
    date:Date,
    description:String,
    amount:Number,
    category:String,
    payment:String,
}

const dashboardExpensesSchema=new mongoose.Schema<dashboardExpenses>({
    userId:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    amount:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    payment:{
        type:String,
        required:true,
    },

    
})
const dashboardExpensesModel = mongoose.model<dashboardExpenses>("dashboardExpenses",dashboardExpensesSchema)

export default dashboardExpensesModel
import mongoose from "mongoose";

interface User {
    name: string;
    age: number;
    username: string;
  }
const UserSchema = new mongoose.Schema<User>(
    {
        name:{
            type: String,
            required:true,
        },
        age:{
            type: Number,
            required:true,
        },
        username:{
            type: String,
            required:true,
        },
    })

const UserModel= mongoose.model("users",UserSchema)

/*module.exports= UserModel*/
export default UserModel
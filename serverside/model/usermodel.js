import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
        fullname : {
            type : String,
            required : true
        },
        email : {
            type : String,
            required : true
        },
        phone : {
            type : Number,
            required : true
        },
        password : {
            type : String,
            required : true
        },
        address : {
            type : String,
            required : true
        },
        otp:{
            type:Number,
        },
        verified:{
            type:Boolean,
            default:false,
        }
    }
)
export default mongoose.model("user",userSchema);
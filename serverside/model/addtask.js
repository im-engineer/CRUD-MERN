import mongoose from "mongoose";
import paginate from 'mongoose-paginate-v2';

const addTaskSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            required : true
        },
        date : {
            type : String,
            required : true,
        },
        time : {
            type : Number,
            required : true
        },
        dateofcompletion : {
            type : String,
            required : true
        }
    }
)
addTaskSchema.plugin(paginate)
export default mongoose.model("addtask",addTaskSchema);
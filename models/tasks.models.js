import mongoose  from "mongoose";
const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        startDate:{
        type:Date,
        required:true,
        }
    },
    startTime:{
        type:String,
        duration:Number,
        endDate:Date,
        status:{
            type:String,
            enum:['TODO','INPROGRESS','COMPLETED','LATE','OVER-DUE'],
            default:'TODO'
        }
    }

});
const taskModel = mongoose.model('contact',taskSchema)
export default taskModel; 

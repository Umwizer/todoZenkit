import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    startDate: {
      type: Date,
      required: true,
    },
  },

  status: {
    type: String,
    enum: ["Todo", "Inprogress", "Completed", "Late", "Over-due"],
    default: "TODO",
  },
  dueDate: {
    startDate: {
      type: Date,
      required: false,
    },
    endDate: {
      type: Date,
      required: false,
    },
    startTime: {
      type: String,
      required: false,
    },
     endTime: {
      type: String,
      required: false,
    },
    duration: {
      type: Number,
      required: false,
    },
    durationType: {
      type: String,
      required: false,
      enum: {
        values: ["Minutes", "Hours", "Days", "Weeks", "Months"],
        message: "{VALUE} is not a valid duration type",
      },
      default: "Days",
    },
  },
});
const taskModel = mongoose.model("contact", taskSchema);
export default taskModel;

import mongoose from "mongoose";
import validator from "validator";


const appointmentSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"FirstName must contain atleast 3 characters"]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"LastName must contain atleast 3 characters"]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Please provide a valid email"]
    },
    phone:{
        type:String,
        required:true,
        minLength:[10,"Phone Number must contain exact 10 digits"],
        maxLength:[10,"Phone Number must contain exact 10 digits"]
    },
    pin:{
        type:String,
        required:true,
        minLength:[6,"PIN must contain exact 6 characters"],
        maxLength:[6,"PIN must contain exact 6 characters"]
    },
    dob:{
        type:Date,
        required:[true,"DOB is required!"]
    },
    gender:{
        type:String,
        required:true,
        enum:["Male","Female"]
    },
    appointment_date:{
        type:String,
        required:true,
    },
    department:{
        type:String,
        required:true
    },
    doctor:{
        firstName:{
            type:String,
            required:true,
            minLength:[3,"FirstName must contain atleast 3 characters"]
        },
        lastName:{
            type:String,
            required:true,
            minLength:[3,"LastName must contain atleast 3 characters"]
        }
    },
    hasVisited:{
        type:Boolean,
        default:false
    },
    doctorId:{
        type:mongoose.Schema.ObjectId,
        required:true
    },
    patientId:{
        type:mongoose.Schema.ObjectId,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["Pending","Accepted","Rejected"],
        default:"Pending"
    }
});

export const Appointment=mongoose.model("Appointment",appointmentSchema);

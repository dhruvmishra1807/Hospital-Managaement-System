import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"



const userSchema=new mongoose.Schema({
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
    password:{
        type:String,
        required:true,
        minLength:[11,"Password must contain atleast 11 characters."],
        select:false
    },
    role:{
        type:String,
        required:true,
        enum:["Admin","Patient","Doctor"],
    },
    doctorDepartment:{
        type:String
    },
    docAvatar:{
        public_id:String,
        url:String,
    }
})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password=await bcrypt.hash(this.password,10);
})


userSchema.methods.comparePassword=async function(enteredpass){
    return await bcrypt.compare(enteredpass,this.password);
}

userSchema.methods.generateJWT=function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET_KEY,{expiresIn:process.env.JWT_EXPIRES,});
};


export const User=mongoose.model("User",userSchema);
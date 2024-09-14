import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"hospital_management_system"
    }).then(()=>{
        console.log("Connected")
    }).catch(err=>{
        console.log(`error:${err}`)
    })
}
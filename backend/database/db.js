import mongoose from "mongoose";

export const connectDB = () =>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Database Connected Successfully!")
    })
    .catch((err)=>{
        console.error("Error: While Connecting to Database ", err);
        
    })
}
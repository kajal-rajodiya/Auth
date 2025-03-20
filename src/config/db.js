import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
            bufferCommands: false // Disable mongoose buffering
          }); 
           console.log("connecct to db")
        }catch (error) {
        console.log("error connectiong to DB",error)
    }
}
export default connectDB;
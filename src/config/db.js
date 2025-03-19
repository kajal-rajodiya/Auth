import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('connect to db')
    } catch (error) {
        console.log("error connectiong to DB",error)
    }
}
export default connectDB;
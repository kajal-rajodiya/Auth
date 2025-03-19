// import mongoose from "mongoose";

// const connectDB = async ()=>{
//     try {
//         await mongoose.connect(process.env.MONGODB_URI)
//         console.log('connect to db')
//     } catch (error) {
//         console.log("error connectiong to DB",error)
//     }
// }
// export default connectDB;


// const mongoose = require('mongoose');
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000 // Increase timeout to 30 seconds
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};
export default connectDB;
// module.exports = connectDB;

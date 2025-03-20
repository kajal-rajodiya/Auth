import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import connectDB from './src/config/db.js'
import userRouter from './src/routes/user.routes.js'
import cookieParser from "cookie-parser";
import jobRouter from "./src/routes/job.routes.js";
import skillRouter from "./src/routes/skill.routes.js"
import categoryRouter from './src/routes/category.routes.js';
import companyRouter from './src/routes/company.routes.js';
import appliedRouter from './src/routes/applied.routes.js';

dotenv.config();
const app = express();

await connectDB();
app.use(cors({
    origin: 'https://ubiquitous-pudding-5f852c.netlify.app', // Your frontend URL
    credentials: true
}));
app.use(express.json({ strict: false }));
app.use(cookieParser());

// ✅ Routes
app.use("/api/user", userRouter);
app.use("/api/job", jobRouter);
app.use("/api/company", companyRouter);
app.use("/api/skills", skillRouter);
app.use("/api/category", categoryRouter);
app.use("/api/apply", appliedRouter);



const PORT = process.env.PORT || 8080;
app.get('/', (req, res) => {
    res.send('✅ Server is running successfully!');
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
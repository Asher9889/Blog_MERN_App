import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_DB_URL)
.then(()=> {console.log("Database is connected")})
.catch((err)=>{ console.log("error caugth during connecting to DB: ", err)})

const app = express();

app.listen(3000, ()=>{
    console.log("app is listening from port 3000")
})

// routes Import

import userRoute from "./routes/user.route.js"

// routes declaration

app.use("/api/v1/user", userRoute)
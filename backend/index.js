import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import FileUpload from "express-fileupload";

// import middleware
import authRoute from "./routes/authRoutes.js";
import productRoute from "./routes/productRoutes.js";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    console.log(error)
  }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });


//middlewares ROUTING
app.use(cors())
app.use(cookieParser())
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));

app.use("/api/auth", authRoute);
app.use("/api/product", productRoute);


//End Middlewares

app.listen(8800, () => {
    connect()
    console.log("Connected to backend")
})
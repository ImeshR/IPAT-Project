import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import loginController from "./controllers/auth/auth.js";

const app = express();
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());

const URL = process.env.MONGODB_URI;

// Middleware
app.use(cookieParser());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Mongodb Connection success!");
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongodb disconnected!");
});

mongoose.connection.on("error", (err) => {
  console.error("Mongodb connection error:", err);
});

// Routes
app.use("/api/auth", loginController);

app.listen(PORT, () => {
  console.log("Connected to Backend");
  console.log("Server is running on port: " + PORT);
});

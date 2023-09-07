import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },  
    password: {
        type: String,
        required: true,
    },
    role: { 
        type: String,
        required: true,
        default: "user",
    },
    contactNumber: { type: String },
    pofilePicture: { type: String },
}, { timestamps: true });

const Customer = mongoose.model("User", CustomerSchema);

export default Customer;
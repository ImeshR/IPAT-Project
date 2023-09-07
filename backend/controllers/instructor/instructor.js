import express from "express";
import { updateinstructor } from "../../services/instructor/instructor.js";

const router = express.Router();

//update instructor data
router.put("/update/:id", updateinstructor);

export default router;
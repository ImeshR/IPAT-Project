import express from 'express';
import { enroll ,updatestudent} from '../../services/student/student.js';

const router = express.Router();

//enroll by key 
router.get('/enroll/:key', enroll);

//update student data
router.put("/update/:id", updatestudent);

export default router;
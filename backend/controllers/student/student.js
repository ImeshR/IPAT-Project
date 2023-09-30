import express from 'express';
import { enroll ,updatestudent,  checkenroll} from '../../services/student/student.js';

const router = express.Router();

//enroll by key 
router.get('/enroll/:key', enroll);

//check if enrollment key is valid
router.get('/enroll/check/:key', checkenroll);

//update student data
router.put("/update/:id", updatestudent);

export default router;
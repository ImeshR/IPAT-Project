import express from 'express';
import { createlabroom ,updatelabroom ,deletelabroom,addinstructor,deleteinstructor} from '../../services/admin/admin.js';

const router = express.Router();


//assign instructor to labroom
router.post("/createnew", createlabroom);

//update labroom
router.put("/update/:id", updatelabroom);

//delete labrrom
router.delete("/delete/:id", deletelabroom);


// add instructor to application
router.post("/addinstructor", addinstructor);

//delete instructor from application
router.delete("/deleteinstructor/:id", deleteinstructor);

export default router;
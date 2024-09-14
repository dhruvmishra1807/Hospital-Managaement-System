import express from "express"
import { deleteAppointment, getAllAppointment, postAppointment, updateAppointmentStatus } from "../controller/appointmentController.js";
import {isPatientAuthenticated,isAdminAuthenticated} from "../middlewares/auth.js"
const router=express.Router();

router.post("/post",isPatientAuthenticated,postAppointment)
router.get("/getall",isAdminAuthenticated,getAllAppointment)
router.delete("/delete/:id",isAdminAuthenticated,deleteAppointment)
router.put("/update/:id",isAdminAuthenticated,updateAppointmentStatus)




export default router;
import express from 'express';
import {verifyToken} from '../middleware/vtoken'
import { verifyUser } from '../middleware/VerifyOtp';
import { userSignup, login, getUserId, addTask, showList,getTaskId,updateTask,deleteTask,verifyOTP} from '../controller/usercontroller';
const router = express.Router();

router.post("/usersignup",userSignup)
router.post("/verifyOTP",verifyOTP);
router.post("/login",[verifyUser],login)
router.get("/userid",verifyToken,getUserId)
router.post("/addtask",addTask)
router.get("/list",showList)
router.get("/id",getTaskId)
router.put("/update",updateTask)
// router.put("/deletetask",deleteTask)
router.delete("/delete/:_id",deleteTask)
// router.post("/email",sentEmail)

export default router;
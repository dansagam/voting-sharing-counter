import express from "express"
import {
   getUsers,
   getSharedLink,
   getSignUp,
   calcSharedCount,
   signUp, registerShared
} from "../controllers.js/userController.js";
const router = express.Router();


router.route('/').get(getSignUp).post(signUp)
router.route('/winner').get(getUsers)
// router.route('/:id').get(getSharedLink).post(registerShared)
router.route('/:id/voting').get(getSharedLink).post(registerShared)



export default router
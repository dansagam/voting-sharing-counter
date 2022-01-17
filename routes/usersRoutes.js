import express from "express"
import {
   getUsers,
   getSharedLink,
   getSignUp,
   getWinner,
   calcSharedCount,
   signUp, registerShared
} from "../controllers.js/userController.js";
const router = express.Router();


router.route('/').get(getSignUp).post(signUp)
router.route('/winner').get(getWinner)
// router.route('/:id').get(getSharedLink).post(registerShared)
router.route('/:id/voting').get(getSharedLink).post(registerShared)



export default router
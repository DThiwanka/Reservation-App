import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controller/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// //CREATE
// //router.post("/", createUser)

// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("Hello user, You're Logged In")
// })

// router.get("/checkuser/:id",  verifyUser,(req,res,next)=>{
//     res.send("Hello user, You're Logged In and you can delete your account")
// })

// router.get("/checkadmin/:id",  verifyAdmin,(req,res,next)=>{
//     res.send("Hello Admin, You're Logged In and you can delete All accounts")
// })


//UPDATE
router.put("/:id", verifyUser, updateUser)

//DELETE
router.delete("/:id", verifyUser, deleteUser)

//GET Details
router.get("/:id", verifyUser, getUser)

//GET ALL
router.get("/", verifyAdmin, getUsers)


export default router;
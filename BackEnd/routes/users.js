import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controller/user.js";

const router = express.Router();

// //CREATE
// //router.post("/", createUser)

//UPDATE
router.put("/:id",updateUser)

//DELETE
router.delete("/:id", deleteUser)

//GET Details
router.get("/:id", getUser)

//GET ALL
router.get("/",getUsers)


export default router;
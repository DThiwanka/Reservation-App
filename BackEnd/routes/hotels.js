import express from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controller/hotel.js";
import Hotel from '../models/Hotel.js'
import { CreateError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();


//CREATE
router.post("/",verifyAdmin, createHotel)

//UPDATE
router.put("/:id",verifyAdmin,updateHotel)

//DELETE
router.delete("/:id", deleteHotel)

//GET Details
router.get("/:id", getHotel)

//GET ALL
router.get("/",getHotels)

export default router;


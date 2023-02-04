import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controller/hotel.js";

import Hotel from '../models/Hotel.js'
import { CreateError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();


//CREATE
router.post("/",verifyAdmin, createHotel)

//UPDATE
router.put("/:id",verifyAdmin,updateHotel)

//DELETE
router.delete("/:id",verifyAdmin, deleteHotel)

//GET Details
router.get("/find/:id", getHotel)

//GET ALL
router.get("/",getHotels)

//Count By City
router.get("/countByCity",countByCity)

//Count By Type
router.get("/countByType",countByType)

export default router;


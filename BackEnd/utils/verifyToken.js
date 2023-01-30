import jwt from "jsonwebtoken"
import { CreateError } from "../utils/error.js";

export const verifyToken = (req, res, next) => {
 const token = req.cookies.access_token;
}



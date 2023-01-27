import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'

const app = express();
dotenv.config();

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO)
        console.log('%cMongoDb Connected!',
        'font-size: 20px; background-color: yellow; color:red; margin-left: 20px;')
    } catch (error) {
        throw error
      
    }
}

mongoose.connection.on("diconnected",()=>{
    console.log("Mongoose is disconnected!")
})

mongoose.connection.on("connected",()=>{
    console.log("Mongoose is connected!")
})

//middleware

app.use(express.json())

app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/hotels",hotelsRoute)
app.use("/api/rooms",roomsRoute)

// app.get("/users",(req,res)=>{
//     console.log("test")
//     res.send("Hello First Request!")
    
// })

app.listen(8800, ()=>{
    connect()
    console.log("Backend server is running!");
})


//mongodb+srv://dulaj:reservatioApp@cluster0.hokwjox.mongodb.net/?retryWrites=true&w=majority
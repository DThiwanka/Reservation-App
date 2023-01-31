import mongoose from "mongoose";
// const { Schema } = mongoose

const RoomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,

    },

    price: {
        type: Number,
        required: true,

    },

    desc: {
        type: String,
        required: true
    },

    maxPeople: {
        type: Number,
    },

    roomNumbers: [{ number: Number, unavailableDates: [{ type: [Date] }] }],
},
    { timestamps: true });

    // [
    //     {number:101,unavailableDates:[]}
    //     {number:101,unavailableDates:[]}
    //     {number:101,unavailableDates:[]}
    //     {number:101,unavailableDates:[]}
    //     {number:101,unavailableDates:[]}
    // ]

export default mongoose.model("Room", RoomSchema)
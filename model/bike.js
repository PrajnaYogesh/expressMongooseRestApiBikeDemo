const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema({
    bikeName : String,
    noOfWheels: Number,
    color: String,
    pedals:Number
})

const Bike = mongoose.model("Bike",bikeSchema)

module.exports = Bike;
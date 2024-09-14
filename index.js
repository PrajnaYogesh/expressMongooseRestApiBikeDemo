const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const connectToDB= require("./config/connectToDB");
connectToDB();
app.use(express.json());

const bikeRoute = require('./routes/bikeRoute')

app.use((req,res,next)=>{
    console.log("This is a middleware");
    next();
})

app.use('/',bikeRoute)

app.listen(PORT,()=>{
    console.log('listening to port');
});

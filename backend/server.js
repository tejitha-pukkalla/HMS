const express = require("express");
const http = require("http")
const dotenv = require("dotenv")
const mongoose = require("mongoose")


dotenv.config()
const app = express();
const server = http.createServer(app)

const dbConnect = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("db connected")
    }
    catch(e){
        console.log("Error to connecting MongoDB",e.message)
    }
}
dbConnect();
const PORT = process.env.PORT || 6000;
server.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})
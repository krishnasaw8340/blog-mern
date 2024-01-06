const express = require("express");
const mongoose = require("mongoose")
const cors  = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute.js");
const app = express();
const user = process.env.DB_USERNAME
const pass = process.env.DB_PASSWORD
const PORT = process.env.PORT

const Connection = async() =>{
    const URL = `mongodb+srv://${user}:${pass}@medfist.jn81oke.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL);
        console.log("Database Connected");
    }
    catch (err)
    {
        console.log(err);
    }
}
Connection();
app.use(cors({
    origin: ["http://localhost:3000"],
    methods:["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }))
app.listen(PORT, ()=>{
    console.log(`Server is running on the ${PORT}`);
})
app.use(cookieParser());
app.use(express.json());
app.use("/", authRoute);

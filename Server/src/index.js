const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

require("dotenv").config();

const PORT = process.env.PORT;

const testController = require("./controller/test.controller");

app.use("/", testController);

app.listen(PORT, async()=>{
    try{
        await connect();
        console.log("DB is connected...!");
    }catch(err){
        console.log(err);
    }
})
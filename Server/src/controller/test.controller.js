const express = require("express");

const router = express.Router();

const Test = require("../model/test.model");

router.post("/test", async(req, res)=>{
    try{
        const test = await Test.create(req.body);
        return res.status(201).send(test);
    }catch(err){
        return res.status(500).send(err);
    }
})

router.get("/test", async(req, res)=>{
    try{
        const test = await Test.find().lean().exec();
        return res.status(201).send(test);
    }catch(err){
        return res.status(500).send(err);
    }
})

module.exports = router;
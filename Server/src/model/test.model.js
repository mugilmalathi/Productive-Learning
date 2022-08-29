const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
    id:{type: Number},
    name:{type: String},
    age:{type: Number},
    total:{type: Number}
},{
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("test", testSchema)
const mongoose = require("mongoose");

const readingsSchema = new mongoose.Schema({
    title: String,
    content: String,
    addedAt: Date,
    updatedAt: Date
});

const Readings = mongoose.model("Reading", readingsSchema);

module.exports = Readings;
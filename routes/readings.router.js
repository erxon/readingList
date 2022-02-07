const express = require("express");
const router = express.Router();
const Readings = require("../models/readings.model");

//Add new item in the reading list
router.post("/", (req, res)=>{
    const newItem = new Readings({
        title: req.body.title,
        content: req.body.content,
        addedAt: req.body.addedAt,
        updatedAt: req.body.updatedAt
    });
    newItem.save()
        .then(()=> res.json("successfully added"))
        .catch((err) => res.status(400).json("Error: " + error));
});

//Get the reading list of a specific user
router.get("/", (req, res) =>{
    Readings.find()
        .then((readings)=>{res.json(readings)})
        .catch((err) => res.status(400).json("Error: " + error));
});

//Get a specific item from the DB
router.route("/item/:itemId")
    .get((req, res) => {
        Readings.findOne({_id: req.params.itemId})
            .then((item)=> res.json(item))
            .catch((err) => res.status(400).json("Error: " + error));
    })
    .delete((req, res) =>{
        Readings.deleteOne({_id: req.params.itemId})
            .then(() => { res.json("Item successfully deleted.")})
            .catch((err) => res.status(400).json("Error: " + error));
    })
    .patch((req, res) => {
        Readings.updateOne({_id: req.params.itemId}, req.body)
            .then(() => {res.json("Item successfully updated.")})
            .catch((err) => res.status(400).json("Error: " + error));
    });

module.exports = router;

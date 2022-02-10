const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const readingsRouter = require("./routes/readings.router.js");
const cors = require("cors");
const path = require("path");

//configure environment variables
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

//Establish connection to MongoDB Atlas DB
mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log("Mongo DB connection successfully established");
});

//Routes
app.use("/readings", readingsRouter);

//Serve static assets if in production 
if (process.env.NODE_ENV === "production"){
    //Set static folder
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}
//Listen to port 5000
app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server is running at port 5000");
});


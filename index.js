const express = require('express');
const  mongoose  = require('mongoose');
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3030

//routes
app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

//mongodb connection
mongoose.set('strictQuery', true);
mongoose
    .connect(process.env.MONGODB_URI)
    .then (() => console.log("Connected to MongoDB"))
    .catch ((error) => console.error(error));

app.listen(port, () => console.log('server listening on port', 3030));

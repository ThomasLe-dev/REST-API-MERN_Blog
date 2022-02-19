const express = require("express");
const app = express();
const PORT = 5000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config()

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(console.log("connectted to mongodb"))
.catch((err) => console.log(err));

app.listen(PORT, ()=>{
    console.log('Running Backend.');
})
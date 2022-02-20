const express = require("express");
const app = express();
const PORT = 5000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

dotenv.config()
app.use(express.json());

//connect to MongoDB
mongoose
.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(console.log("connectted to mongodb"))
.catch((err) => console.log(err));

app.use("/api/auth", authRoute);

app.listen(PORT, ()=>{
    console.log('Running Backend.');
})
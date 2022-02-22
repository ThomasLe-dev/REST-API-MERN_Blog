const express = require("express");
const app = express();
const PORT = 5000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");

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

//handle uploading file
const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null, "images")
    }, filename:(req,file, cb) =>{
        cb(null, "me.jpg")
    }
})

//upload file
const uploadFile = multer({storage:storage});
app.post("/api/upload", uploadFile.single("file"), (req, res) => {
    res.status(200).json("Upload successfully");
})

// use routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen(PORT, ()=>{
    console.log('Running Backend.');
})
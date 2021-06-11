const {request} = require("express");
const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 80;
const app = express();

//Database connection
mongoose.connect("mongodb://localhost:27017/employee",{useNewUrlParser : true, useUnifiedTopology: true},
    ()=>{
    console.log("Databse connected Successfully!");
});

//Middlewares
app.use(express.urlencoded({extended: true}));
app.use('/public',express.static("public"));
app.set("view engine","ejs");

//Routes
app.use(require("./routes/index"));
app.use(require("./routes/tableContent"));
app.use(require("./routes/tasks"));
// app.use(require("./routes/img"));

//Server Configuration
app.listen(PORT, ()=> {
    console.log("Server Started on PORT: ", PORT);
});
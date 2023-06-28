const express = require('express');

const errorMiddleware = require("./middlewares/error");

const app = express();


app.use(express.json());


const product = require("./routes/productRoute");


app.use("/api/v1",product);

//middleware 

app.use(errorMiddleware);


module.exports = app


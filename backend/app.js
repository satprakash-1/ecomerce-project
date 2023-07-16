const express = require('express');
const cookieParser = require('cookie-parser');

const errorMiddleware = require("./middlewares/error");

const app = express();


app.use(express.json());
app.use(cookieParser());


const product = require("./routes/productRoute");
const user = require("./router/userroutes");


app.use("/api/v1",product);
app.use("/api/v1".user);

//middleware 

app.use(errorMiddleware);


module.exports = app


import express from "express";
import morgan from "morgan";
import router from "./routes/index.js";

const app = express();

app.use(morgan('dev'));

app.use(router)
app.listen(3001)

//console.clear()
console.log("http://localhost:3001")
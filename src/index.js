import express from "express";
import morgan from "morgan";
import router from "./routes/index.js";
import 'dotenv/config'

const port = process.port || 3000 || 3001 || 3002
const app = express();

app.use(morgan('dev'));

app.use(router)
app.listen(port)

//console.clear()
//console.log(process.env.TOKEN_MP)
console.log(`http://localhost:${port}`)
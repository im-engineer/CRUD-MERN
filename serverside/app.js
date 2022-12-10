import bodyParser from 'body-parser';
import express from 'express';
const app = express();
import db from './db';
import { mongoconnection } from './db';
mongoconnection();
import userrouter from './router/userrouter';
import cors from 'cors'
app.use(bodyParser.urlencoded(
    {
        extended:true
    }
));
app.use(bodyParser.json());
app.use(cors({origin:"*"}))

app.use("/user",userrouter)

export default app;
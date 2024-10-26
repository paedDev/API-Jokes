import express from "express";
import Joi from "joi"
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended:true}))
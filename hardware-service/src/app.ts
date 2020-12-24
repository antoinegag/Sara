import express from "express";
import { config } from "dotenv";
import { json } from "body-parser";
import APIRouter from "./api";
config();

const app = express();
const port = process.env.PORT || 3000;

app.use(json());

app.use(APIRouter);

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});

import express from "express";
import expressAsyncHandler from "express-async-handler";
import axios from "axios";
import dotenv from "dotenv"
const { Router } = express;

const transactionRouter = Router();
dotenv.config()

transactionRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const { id, start, end, type, } = req.query;

    const config = {
      method: "get",
      url: `https://api.withmono.com/accounts/${id}/transactions?start=${start}&end=${end}&type=${type}&paginate=false`,
      headers: {
        Accept: "application/json",
        "mono-sec-key": process.env.MONO_SECRET_KEY || "sb",
      },
    };
    
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        res.send(JSON.stringify(response.data))
      })
      .catch(function (error) {
        console.log(error);
        res.send(error.response.data.message)
      });
  })
);

export default transactionRouter
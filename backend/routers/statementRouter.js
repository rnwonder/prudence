import express from "express";
import expressAsyncHandler from "express-async-handler";
import axios from "axios";
import dotenv from "dotenv"

const { Router } = express;

const statementRouter = Router();
dotenv.config()

statementRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const { id, period, output  } = req.query;
    let url

    if (output) {
        url = `https://api.withmono.com/accounts/${id}/statement?period=${period}&output=${output}`
    } else {
        url = `https://api.withmono.com/accounts/${id}/statement?period=${period}`
    }

    const config = {
      method: "get",
      url: url,
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

export default statementRouter

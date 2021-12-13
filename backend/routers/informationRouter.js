import express from "express";
import expressAsyncHandler from "express-async-handler";
import axios from "axios";
import dotenv from "dotenv"

const { Router } = express;

const informationRouter = Router();
dotenv.config()

informationRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const { id } = req.params;

    const config = {
      method: "get",
      url: `https://api.withmono.com/accounts/${id}`,
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

export default informationRouter

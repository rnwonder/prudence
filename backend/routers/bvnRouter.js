import express from "express";
import expressAsyncHandler from "express-async-handler";
import axios from "axios";
import dotenv from "dotenv"
import qs from "qs"

const { Router } = express;


const bvnRouter = Router();
dotenv.config()

bvnRouter.get(
  "/:bvn",
  expressAsyncHandler(async (req, res) => {
    const { bvn } = req.params;

    const data = qs.stringify({
        'bvn': bvn 
    });

    const config = {
      method: "post",
      url: `https://api.withmono.com/360view`,
      headers: {
        Accept: "application/json",
        'Content-Type' : 'application/x-www-form-urlencoded',
        "mono-sec-key": process.env.MONO_SECRET_KEY || "sb",
      },
      data : data
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

export default bvnRouter
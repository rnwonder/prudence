import express from "express";
import expressAsyncHandler from "express-async-handler";
import axios from "axios";
import dotenv from "dotenv"
import qs from "qs"
import User from "../models/userModel.js";
const { Router } = express;

dotenv.config()

const idRouter = Router();

const saveId = async(data, id) => {
  const user = await User.findById(id)
  const some = user.linkedAccounts.find(el => el.accountID === data) 
  let info

  const config = {
    method: "get",
    url: `https://api.withmono.com/accounts/${data}`,
    headers: {
      Accept: "application/json",
      "mono-sec-key": process.env.MONO_SECRET_KEY || "sb",
    },
  };
  
  

  if (user && !some) {

    await axios(config)
    .then(function (response) {
      user.linkedAccounts = [
        ...user.linkedAccounts,
        {
          accountID: data,
          bankName: response.data.account.institution.name,
          accountNo: response.data.account.accountNumber
        }
      ]
    })
    .catch(function (error) {
      console.log(error);
    });
    
  } else {
    return
  }

  const updatedUser = await user.save()
}

idRouter.get("/get", expressAsyncHandler(async (req, res) => {
    const { authCode, userId} = req.query

    const data = qs.stringify({
      'code': authCode 
    });


    const config = {
      method: 'post',
      url: 'https://api.withmono.com/account/auth',
      headers: { 
        'Accept': 'application/json', 
        'Content-Type': 'application/x-www-form-urlencoded', 
        'mono-sec-key': process.env.MONO_SECRET_KEY || "sb"
      },
      data : data
    };
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      saveId(response.data.id, userId)
     
      res.send(response.data)
    })
    .catch(function (error) {
      console.log(error.response.data.message);
      res.status(404).send(error.response.data.message)
    })

  })
);


idRouter.get(
  "/reAuth/:id",
  expressAsyncHandler(async (req, res) => {
    const { id } = req.params;

    const config = {
      method: "get",
      url: `https://api.withmono.com/accounts/${id}/reauthorise`,
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


export default idRouter
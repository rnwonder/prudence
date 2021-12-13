import express from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from 'bcryptjs'
import User from '../models/userModel.js'
const { Router } = express

const userRouter = Router();

userRouter.post("/register", expressAsyncHandler( async(req, res) => {
    const { firstname, lastname, email, password } = req.body
    const user = await User.findOne({email: email})

    if(user) {
        res.status(409).send({message: 'Email already exists'})
    } else {

        const newUser = [{
            firstname,
            lastname,
            email,
            password: bcrypt.hashSync(password, 10),
            budget: [],
            linkedAccounts: []
        }]
    
        const addUser = await User.insertMany(newUser)
    
        res.send({
            id: addUser[0]._id,
            firstname: addUser[0].firstname,
            lastname: addUser[0].lastname,
            email: addUser[0].email,
            budget: addUser[0].budget,
            linkedAccounts: addUser[0].linkedAccounts,
            register: true,
        })

    }

    
}))

userRouter.post("/login", expressAsyncHandler( async(req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({email: email})

    if(user) {
        if(bcrypt.compareSync(password, user.password)) {
            res.send({
                id: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                budget: user.budget,
                linkedAccounts: user.linkedAccounts,
            })
            
        } else {
            res.status(401).send({message: 'invalid password'})
        }
    } else {
        res.status(401).send({message: 'invalid email'})
    }
}))

userRouter.get("/get/:id", expressAsyncHandler( async(req, res) => {
    const { id } = req.params
    const user = await User.findById(id)

    if(user) {   
        res.send({
            id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            budget: user.budget,
            linkedAccounts: user.linkedAccounts,
        }) 
    } else {
        res.status(404).send({message: 'user not found'})
    }
}))

userRouter.get("/budgetAddOne", expressAsyncHandler( async(req, res) => {
    const { id, data } = req.query
    const user = await User.findById(id)

    if(user) { 
        user.budget = [
            ...user.budget,
            data
        ]  
    } else {
        res.status(404).send({message: 'user not found'})
    }

    const updateBudget = await user.save()
    res.send("Budget Updated Successfully")
}))

userRouter.get("/budgetAddMulti", expressAsyncHandler( async(req, res) => {
    const { id, data } = req.query
    const user = await User.findById(id)

    if(user) { 
        data.forEach(el => {
            user.budget = [
                ...user.budget,
                el
            ] 
        })
         
    } else {
        res.status(404).send({message: 'user not found'})
    }

    const updateBudget = await user.save()
    res.send("Budget Updated Successfully")
}))


userRouter.get("/budgetRemove", expressAsyncHandler( async(req, res) => {
    const { id, budgetId } = req.query
    const user = await User.findById(id)

    if(user) { 
        user.budget = user.budget.filter(el => {
            return el["_id"] !== budgetId
        })
        
         
    } else {
        res.status(404).send({message: 'user not found'})
    }

    const updateBudget = await user.save()
    res.send("Budget Updated Successfully")
}))

export default userRouter

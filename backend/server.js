import dotenv from "dotenv"
import express from 'express'
import cors from "cors"
import idRouter from './routers/idRouter.js'
import informationRouter from './routers/informationRouter.js'
import statementRouter from './routers/statementRouter.js'
import cacRouter from './routers/cacRouter.js'
import transactionRouter from './routers/transactionRouter.js'
import incomeRouter from './routers/incomeRouter.js'
import unLinkRouter from './routers/unLinkRouter.js'
import userRouter from './routers/userRouter.js'
import bvnRouter from './routers/bvnRouter.js'
// import {MongoClient} from "mongodb"
import mongoose from "mongoose"
const PORT = process.env.PORT || 5000

// const liveId = "61b5ddfb5c98002fc7a8ada5"

// const main = async() => {
//     const uri = "mongodb+srv://rnwonder:64212401@cluster0.rz4kr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

//     const client = new MongoClient(uri)

//     try {
//         await client.connect();

//         await list(client)
//     } catch (e) {
//         console.error(e)
//     } finally {
//         await client.close()
//     }
    
// }

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/ordel", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
})

// main().catch(console.error)

// const list = async(client) => {
//     const data = await client.db().admin().listDatabases();

//     console.log("Databases");
//     data.databases.forEach(db => {
//         console.log(`- ${db.name}`)
//     })

// }

const app = express();
app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended: false}))

app.use('/api/id', idRouter)
app.use('/api/info', informationRouter)
app.use('/api/statement', statementRouter)
app.use('/api/cac', cacRouter)
app.use('/api/transactions', transactionRouter)
app.use('/api/income', incomeRouter)
app.use('/api/unlink', unLinkRouter)
app.use('/api/user', userRouter)
app.use('/api/user', bvnRouter)

// error catcher middleware that catch error from server
app.use((err, req, res, next) => {
    res.status(500).send({message: err.message})
    console.log(err.message)
})


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
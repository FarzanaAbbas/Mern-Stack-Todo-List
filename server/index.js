require('dotenv').config();
const express = require('express')
const RunServer = require('./Database/Connection')
const cors = require('cors')
const todoRouter = require('./routes/todoRoute')

const app = express()
const port = process.env.PORT || 3000;


// json : javascript object notation
// used to transfer the data
app.use(express.json())
app.use(cors())

RunServer()

app.use('/todolist',todoRouter)

app.listen(port,()=> {
console.log(`server is running on ${port}`)
})
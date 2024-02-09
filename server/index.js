const express = require('express') //require is a function.
const RunServer = require('./Database/Connection')
const TodoRoutes = require('./routes/todoRoute')
const cors = require('cors')
const app = express()

app.use(cors())        //backend port =3000 and front end port = 5173
app.use(express.json()) //working with json 
//https://localhost:3000/todolist
app.use('/todolist', TodoRoutes) // use is a middleware, TodoRoutes is a filename.

RunServer()
app.listen(3000, () => {
    console.log('server is up')
})
const express = require('express')
const { createToDo, updateToDo, deleteToDo, getAllToDo } = require('../controllers/todoCtrl')

const router = express.Router()

//get-> read
//post-> send/create
//put-> update
//delete-> delete


//https://localhost:3000/getall'
router.get('/getall',getAllToDo)
router.post('/',createToDo)
router.put('/updateToDo',updateToDo)
router.delete('/deleteToDo/:id',deleteToDo)


module.exports = router


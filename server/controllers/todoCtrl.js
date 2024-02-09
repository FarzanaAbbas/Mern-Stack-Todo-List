const todo = require("../models/todo")

const createToDo = async (req, res) => {
    try {
        const addToDo = await todo.create({ message: req.body.message })
        res.status(200).json({ success: 'created', data: addToDo })
    } catch (error) {
        console.log(error)
    }
}

const getAllToDo = async (req, res) => {
    try {
        const getToDo = await todo.find({})
        res.status(200).json({ data: getToDo })
    } catch (error) {
        console.log(error)
    }
}

const deleteToDo = async (req, res) => {
    try {
        const deleted = await todo.findByIdAndDelete({ _id: req.params.id })
        res.status(200).json({ success: 'deleted' })
    } catch (error) {
        console.log(error)
    }
}

const updateToDo = async (req, res) => {
    try {
        const updated = await todo.updateOne({ message: req.message })
        res.status(200).json({ success: 'updated', data: updated })

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createToDo,             //if you want to export all the functions. then uhh have to use brackets.
    getAllToDo,
    updateToDo,
    deleteToDo
}
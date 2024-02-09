const mongoose = require('mongoose')

function RunServer() {
    try {
        mongoose.connect('mongodb://localhost:27017/todolist')
        console.log('connection successfull')
    } catch (error) {
        console.log(error)
    }
}
module.exports = RunServer
const mongoose = require('mongoose')

function RunServer(){
    try {
        mongoose.connect('mongodb://localhost:27017/todolist');
        console.log('mongoDB is connected!')
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = RunServer
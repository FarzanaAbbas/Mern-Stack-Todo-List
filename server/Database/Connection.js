const mongoose = require('mongoose')

function RunServer(){
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log('mongoDB is connected!')
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = RunServer
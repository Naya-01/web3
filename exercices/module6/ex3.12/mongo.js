//mongodb+srv://rayan:<password>@cluster0.txcaryo.mongodb.net/?retryWrites=true&w=majority
require('dotenv').config();
const mongoose = require('mongoose');


const url = process.env.MONGODB

console.log('connecting to', url)

mongoose.connect(url)
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

const personSchema = new mongoose.Schema({
    name: String,
    phone: String,
})

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})



module.exports = mongoose.model('persons', personSchema)

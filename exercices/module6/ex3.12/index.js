const express = require('express')
const app = express()
const cors = require('cors')
const Person = require("./mongo")

const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
}
const unknownEndpoint = (request, response, next) => {
    response.status(404).send({ error: 'unknown endpoint' })
    next(error)
}

const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    }

    next(error)
}

app.use(express.json())
app.use(cors())
app.use(requestLogger)
// app.use(unknownEndpoint)

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
    console.log("avant");
    Person.find({})
        .then(persons => {
            if (persons) {
                response.json(persons);
            } else {
                response.status(404).end();
            }
        })
        .catch(error => next(error))
})

app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id)
        .then(person => {
            if (person) {
                response.json(person);
            } else {
                response.status(404).end();
            }
        })
        .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))
})

app.post('/api/persons', async (request, response) => {
    const personPayload = request.body
    const newId = Math.floor(Math.random() * 1e9)
    const newPerson = new Person({
        ...personPayload,
        id: newId,
    });

    const errorMessages = []
    if (!personPayload.name) errorMessages.push("name must be present")
    if (!personPayload.phone) errorMessages.push("number must be present")
    const nameExists = await Person.findOne(newPerson);
    if (nameExists) errorMessages.push("name must be unique")

    if (errorMessages.length > 0) {
        response
            .status(422)
            .json({
                errorMessages,
            })
        return
    }


    newPerson.save().then(savedPerson => {
        response.json(savedPerson)
    })
})

app.use(errorHandler)

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
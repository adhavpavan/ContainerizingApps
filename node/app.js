const express = require('express')
const PORT = 4000

const app = express()

app.get('/', (req, res) => {
    res.send("Hello from node app")
})

app.listen(PORT, () => {
    console.log(`App is listening on port : ${PORT}`)
})
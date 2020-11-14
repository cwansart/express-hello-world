const express = require('express')
const app = express()
const host = '0.0.0.0'
const port = 3000

app.get('/', (_, res) => {
    res.send('Hello World')
})

app.listen(port, host, () => {
    console.log(`Service running on http://${host}:${port}`)
})
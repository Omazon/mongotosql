const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json('hello world')
})

module.exports = {
   path: '/api',
   handler: app
}
require('dotenv').config()
const express = require('express')

const app = express()

const port = 5000

app.get('/', (req,res) => {
    res.send('hello world');
})

app.get('/twitter', (req,res) => {
    res.send('Lucky');
})

app.get('/login', (req,res) => {
    res.send('<h1>Login</h1>');
})

app.get('/youtube', (req,res) => {
    res.send('<h2>Love You Shree</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`example app listening on port ${port}`)
})
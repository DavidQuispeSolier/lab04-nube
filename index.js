const express = require('express')
const port = 5000
const app = express()

app.get('/', (req, res) => {

    res.sendFile('./static/index.html',{
        root:__dirname
    })
})

app.get('/productos', (req, res) => {

    res.sendFile('./static/productos.html',{
        root:__dirname
    })
})

app.get('/cliente', (req, res) => {

    res.sendFile('./static/cliente.html',{
        root:__dirname
    })
})

app.listen(port)
console.log(`Server on port ${port}`)
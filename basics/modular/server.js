const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json());

mongoose.connect('mongodb://localhost/modulardb', {useNewUrlParser: true});

require('./server/config/routes')(app)

app.listen(8000,()=>{
    console.log('listenting on port 8000')
})

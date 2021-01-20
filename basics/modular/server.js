const express = require('express')
const mongoose = require('mongoose')
const app = express()
mongoose.connect('mongodb://localhost/modulardb', {useNewUrlParser: true});

require('./server/config/routes')(app)

app.listen(8000,()=>{
    console.log('listenting on port 8000')
})

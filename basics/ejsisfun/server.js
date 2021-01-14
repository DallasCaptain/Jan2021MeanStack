const express = require('express')
const ejs = require('ejs')

const app = express()

app.use(express.static(__dirname + '/static'))

app.set('views', __dirname +'/views')
app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    
})
app.get('/names',(req,res)=>{
    let names=['carl','bob','michael']
    res.render('users', {names:names})
})

app.listen(8000, ()=>{
    console.log('server running on port 8000')
})
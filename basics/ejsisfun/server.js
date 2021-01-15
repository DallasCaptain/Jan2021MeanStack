const express = require('express')
const bodyParser = require('body-parser');
const session = require('express-session')
const ejs = require('ejs')

const app = express()
app.use(session({secret:'i solemnly swear i am upto no good'}))
app.use(express.static(__dirname + '/static'))
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname +'/views')
app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    //servers static index.html
})
app.get('/names',(req,res)=>{
    let names=['carl','bob','michael']
    res.render('users', {names:names})
})

app.get('/form',(req,res)=>{
    res.render('form')
})

app.get('/makecookie',(req,res)=>{
    if(req.session.name){
        console.log('name exists')
    }else{console.log('name does not exist')}
    req.session.name = 'bob'
    res.redirect('/showcookie')
})

app.get('/showcookie',(req,res)=>{
    console.log(req.session)
    res.render('cookie')
})

app.get('/eatcookie',(req,res)=>{
    req.session.destroy()
    res.redirect('/showcookie')
})

app.post('/submit',(req,res)=>{
    console.log('We recieved a post',req.body)
    res.redirect('/names')
})

app.listen(8000, ()=>{
    console.log('server running on port 8000')
})
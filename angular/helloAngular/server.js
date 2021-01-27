const express = require('express')


const app = express()
app.use(express.static(__dirname + '/helloAngular/dist/helloAngular'))
app.use(express.json())

const cats = [{name:'charlie'},{name:'grumpycat'},{name:'litten'},{name:'garfield'},{name:'tom'},{name:'megatron'}]

app.get('/',(req,res)=>{

})

app.get('/tasks',(req,res)=>{
    console.log('recieved request /tasks')
    res.json([{name:'dishes'},{name:'sweeping'}])
})

app.get('/api/kittens',(req,res)=>{
    console.log('recieved request /kittens')
    res.json(cats)
})

app.post('/api/kittens', (req,res)=>{
    console.log('req body is:',req.body)
    cats.push(req.body)
    res.json({message:'got it bro'})
})

app.get('/api/kittens/:id',(req,res)=>{
    //console.log('show kitty:',req.params)
    res.json(cats[req.params.id])
})

app.get('*',(req,res)=>{
    res.sendFile(__dirname + '/helloAngular/dist/helloAngular/index.html')
})

app.listen(8000)
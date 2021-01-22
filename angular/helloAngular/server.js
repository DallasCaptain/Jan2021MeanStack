const express = require('express')


const app = express()
app.use(express.static(__dirname + '/helloAngular/dist/helloAngular'))
app.use(express.json())

app.get('/',(req,res)=>{

})

app.get('/tasks',(req,res)=>{
    console.log('recieved request /tasks')
    res.json([{name:'dishes'},{name:'sweeping'}])
})

app.get('/kittens',(req,res)=>{
    console.log('recieved request /kittens')
    res.json([{name:'charlie'},{name:'grumpycat'},{name:'litten'},{name:'garfield'},{name:'tom'},{name:'megatron'}])
})

app.listen(8000)
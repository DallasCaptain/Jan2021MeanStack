const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const session = require('express-session')
const ejs = require('ejs')

const app = express()



mongoose.connect('mongodb://localhost/janmean', {useNewUrlParser: true});

const CarSchema = new mongoose.Schema({
    color:String,
    year:Number
})

const StudentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    cars:[CarSchema],
    password:String
})


const Car = mongoose.model('Car', CarSchema)
const Student = mongoose.model('Student', StudentSchema)

const bcrypt = require('bcrypt')

app.use(session({secret:'i solemnly swear i am upto no good'}))
app.use(express.static(__dirname + '/static'))
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname +'/views')
app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    
})
app.get('/students',(req,res)=>{
    Student.find()
    .then(students => {
        res.render('students',{students:students})
    })
    .catch(err => console.log('error:' , err))
})

app.get('/login',(req,res)=>{
    res.render('login')
})
app.post('/validate',(req,res)=>{
    pass = req.body.password
    Student.findById('600712293202bd1784ee2981')
    .then(student =>{
        bcrypt.compare(pass, student.password)
        .then(result=>{
            if(result){
                req.session.userid = student._id
                res.redirect('/students')
            }else{
                //failed to login
                res.redirect('/login')
            }
            
        })
        .catch(err => console.log('error:' , err))

    })
    .catch(err => console.log('error:' , err))
})
app.get('/setup',(req,res)=>{
    //create object
    const car = new Car()
    car.color ='Pink'
    car.year = 2000
    car.save()
    .then(newcar =>{
        const student = new Student()
        student.name = 'secure_george'
        student.age = 16
        student.cars.push(newcar)
        bcrypt.hash('asdfasdf',10)
        .then(hashed_pass =>{
            student.password = hashed_pass
            student.save()
            .then(newstudent => console.log('saved: ',newstudent))
            .catch(err => console.log('error:' , err))
        })
        .catch(err => console.log('error:' , err))

        
    })
    .catch(err => console.log('error:' , err))
    
    res.redirect('/')
})



app.listen(8000, ()=>{
    console.log('server running on port 8000')
})
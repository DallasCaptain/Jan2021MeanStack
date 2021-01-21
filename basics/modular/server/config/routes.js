const Users = require('../controllers/users.js')


module.exports = function(app){

    app.get('/',(req,res)=>{
        Users.index(req,res)
    })
    
    app.get('/home',(req,res)=>{
        res.sendfile('home.html')
    })

    app.post('/thanks',(req,res)=>{
        Users.thanks(req,res)
    })

}

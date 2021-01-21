const mongoose = require('mongoose')

module.exports = {
    index:(req,res)=>{
        res.json({message:'success',status:200})
    },
    thanks:(req,res)=>{
        console.log(req.body)
        res.json({message:'recieved',status:200})
    }


}
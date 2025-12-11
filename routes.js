const express= require('express');
const router = express.Router();
const Apoint_Object = require('./Controller/AppointmentController')

router.get('/',(req,res)=>{
res.render('home')
})

router.post('/submit_from',(req,res)=>{
    Apoint_Object.Add_appointment(req,res)
})







module.exports= router;
const express= require('express');
const router = express.Router();
const Apoint_Object = require('./Controller/AppointmentController')
const contact_obj = require('./Controller/ContactController')
const login_obj = require('./Controller/LoginController')
const event_obj = require('./Controller/Eventcontroller')

router.get('/',(req,res)=>{
res.render('home')
})
router.get('/contact',(req,res)=>{
res.render('contact')
})

router.post('/submit_from',(req,res)=>{
    Apoint_Object.Add_appointment(req,res)
})
router.post('/contact',(req,res)=>{
     contact_obj.Enquire_Contact(req,res)
})
router.use('/login',(req,res) =>{
    login_obj.Login_user(req,res)
})
router.use('/useraccount',(req,res)=>{
    login_obj.createuser(req,res)
})
router.use('/event',(req,res)=>{
    event_obj.eventbooked(req,res)
})





module.exports= router;
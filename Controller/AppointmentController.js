const appointmentModal = require('../Modal/Appointment')
class AppointmentController{
    Add_appointment(req, res){
     
            const data = {
                    Name:req.body.name,
                    Email:req.body.email,
                    Phone:req.body.phone,
                    Time : req.body.Appointment_time,
                    address:req.body.address,
                    Event : req.body.event_type
                    
            }
            appointmentModal.create(data,(err)=>{
                if(err){
                    res.render('Home',{msg:"Error in Booking Appointment"})
                }
                else{
                    res.render('Home',{msg:data.Name +" Appointment Booked Successfully"})
                }
            })
        }
}


module.exports = new AppointmentController()
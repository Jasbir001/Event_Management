const appointmentModal = require('../Modal/Appointment')
const bookingModal = require('../Modal/booking')

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
                    res.render('Home',{msg:"Error in Book Appointment"})
                }
                else{
                    res.render('Home',{msg:data.Name +" Appointment Booked Successfully"})
                }
            })
        };
    Add_booking(req,res){

        if(req.method=='GET')
        {
            res.render('eventbooked')
        }
        else{
        const data = {
            Name:req.body.naam,
            Email:req.body.email,
            Phone:req.body.phone,
            Time:req.body.time,
            Apxsize:req.body.apxsize,
        }
        bookingModal.create(data,(err)=>{
                if(err){
                    res.render('eventbooked',{msg:"Error In Booking event!! Try Again"+err})
                    console.log(err)
                }
                else{
                    res.render('eventbooked',{msg:data.Name +" Event is Booked Successfully"})
                }
            })
        }
    }
}


module.exports = new AppointmentController()
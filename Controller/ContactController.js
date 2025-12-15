const contactModel = require('../Modal/Contact')

class contact{
    Enquire_Contact(req,res)
    {
        if(req.method=='GET')
        {
            res.render('contact')
        }
        else{
            const data = 
            {
                Name: req.body.name,
                Email: req.body.email,
                Subject: req.body.subject,
                Message: req.body.message
            }
            contactModel.create(data,(err)=>{
                if(err){
                    res.render('contact',{msg:'Somthing went Wrong try again'})
                }
                else{
                    res.render('contact',{msg:"Your Enguiry has been Submitted Successfully"})
                }
            })
        }
    }
}

module.exports = new contact()
const db=require("../database/mydb")

const Appointment= 
{ 
    create : (data, callback)=>
    {
    const q = `insert into appointment (name, email, mobile, address, appointment_datetime, event_type) 
    values ('${data.Name}','${data.Email}','${data.Phone}','${data.Address}','${data.Time}','${data.Event}')`

    db.query(q,callback)
    },
    delete : (data, callback)=>
    {
        const q =`delete from appointment where id =${data.email}`
        db.query(q,callback)
    },
    list_appointment:(callback)=>{
        const q= `select * from appointment`
        db.query(q,callback)
    }
}

module.exports= Appointment
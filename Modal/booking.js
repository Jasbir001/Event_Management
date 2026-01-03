const db=require("../database/mydb")

const Appointment= 
{ 
    create: (data, callback)=>
    {
    const q = `insert into booking (name, email, phone, time, apxsize) 
    values ('${data.Name}','${data.Email}','${data.Phone}','${data.Time}','${data.Apxsize}')`
    db.query(q,callback)
    },
    // delete : (data, callback)=>
    // {
    //     const q =`delete from appointment where id =${data.email}`
    //     db.query(q,callback)
    // },
    // list_appointment:(callback)=>{
    //     const q= `select * from appointment`
    //     db.query(q,callback)
    // }
}

module.exports= Appointment
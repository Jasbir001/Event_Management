class Event{

    eventbooked(req,res)
    {
        if(req.method=='GET')
            {
            res.render('eventbooked')
            }
        else{

        }
    }
}

module.exports = new Event()
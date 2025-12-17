class Event{

    eventbooked(req,res)
    {
        if(req.method=="GET")
            {
            res.render('eventbooks')
            }
        else{

        }
    }
}

module.exports = new Event()
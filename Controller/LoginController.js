

class Login 
{
    Login_user(req,res)
    {
        if(req.method=='GET')
        {
            res.render('login')
        }
        else{

        }
    }
    createuser(req,res)
    {
        if(req.method=="GET")
            res.render('createuser')
    }
}


module.exports = new Login()


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
}


module.exports = new Login()
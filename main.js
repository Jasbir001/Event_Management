const express= require('express');
const app = express();
const routing= require('./routes.js')
const path = require('path');
const bodyparser = require('body-parser');
const bodyprs=bodyparser.urlencoded({extended:false})
const port=4001;


app.set('view engine','ejs')
app.use(bodyprs)
app.use('/',routing)
app.use("/public",express.static(__dirname+'/public'));


app.listen(port,(req,res)=>{
    console.log(`server is Starting http://localhost:${port}`)
})



const express= require('express');
const app = express();
const routing= require('./routes.js')
const bodyParser = require('body-parser');
const path = require('path');
const urlsp=bodyParser.urlencoded({extended:false});
const port=4001;




app.set('view engine','ejs')
app.use(urlsp)

app.use('/',routing)
app.use("/public",express.static(__dirname+'/public'));


app.listen(port,()=>{
    console.log(`server is Starting http://localhost:${port}`)
})



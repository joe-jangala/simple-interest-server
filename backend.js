const express= require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/interest",function(req,res){
    const principal= req.query.principal;
    const rate = req.query.rate;
    const time = req.query.time;
    console.log(principal);
    console.log(rate);
    console.log(time);

    const mul = parseFloat(principal)*parseFloat(rate)*parseFloat(time);

    const interest = (mul/100);
    
    res.send(interest.toString());
    console.log(interest);

    
})

app.listen(3000);
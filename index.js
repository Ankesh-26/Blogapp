const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    res.send("Welcome to the class");
});

const Port=3000;

app.listen(Port,(err)=>{
    if(err) console.log(err);
    else console.log(`port is live at ${Port}`)
});
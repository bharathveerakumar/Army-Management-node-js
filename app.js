const express=require('express');
const login=require('./routes/login');
const sql=require('./model/login');
const soldiers=require('./routes/soldiers');
const higher=require('./routes/higher');
const app=express();


app.set('view engine', 'ejs');
app.set('views', 'views/layout');
app.use(express.static('views/assets'));
app.use(login);
app.use(soldiers);
app.use(higher);


app.listen(5000, ()=>{
    console.log('Listening');
});



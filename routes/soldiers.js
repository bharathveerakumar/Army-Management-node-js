const express=require('express');
const app=express();
const solCont=require('../controller/soldierCon');


app.set('views', 'views/layout');
app.use(express.static('views/assets'));
app.set('view engine', 'ejs');


app.get('/weapon_request', (req, res)=>{
    res.render('request');
});

app.get('/leave_request', (req, res)=>{
    res.render('leaveReq');
});

app.get('/air_ambulance', (req, res)=>{
    res.render('airAmbulance');
});

app.post('/request', solCont.soldierWeapon);

app.post('/leave_request', solCont.soldierLeave);

app.post('/ambulance_request', solCont.soldierAir);


module.exports=app;
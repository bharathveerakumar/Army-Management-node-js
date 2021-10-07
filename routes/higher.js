const express=require('express');
const higherControl=require('../controller/higherControl');
const app=express();


app.set('views', 'views/layout');
app.use(express.static('views/assets'));
app.set('view engine', 'ejs');


app.get('/soldier_info', higherControl.higherSoldier);
app.get('/inventory', (req, res)=>res.render('inventory'));
app.get('/high_dash', (req, res)=>res.render('high_dash', { sess:req.session }));
app.get('/high_request', higherControl.highRequest);
app.get('/delete', higherControl.reqDelete);


module.exports=app;
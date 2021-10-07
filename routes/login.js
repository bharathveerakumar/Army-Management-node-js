const express=require('express');
const app=express();
const session=require('express-session');
const multer=require('multer');
const loginController=require('../controller/login_controller');


app.set('view engine', 'ejs');
app.set('views', 'views/layout');
app.use(express.static('views/assets'));
app.use(multer().single('images'));
app.use(session({
    secret:'bhuvanesh',
    resave:'false',
    saveUninitialized:'true'
}));


app.get('/', (req, res)=>{
    res.render('login_choose');
});

app.get('/login_high', (req, res)=>{
    res.render('login_high');
});

app.get('/login_soldiers', (req, res)=>{
    res.render('login_soldiers')
});

app.post('/dashboard_soldiers', loginController.soldierChecker);

app.post('/high_dash', loginController.higherChecker);

module.exports=app;
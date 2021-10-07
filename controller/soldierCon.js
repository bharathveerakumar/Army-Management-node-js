const modelData=require('../model/higherModel');
const url=require('url');


exports.soldierWeapon=(req, res)=>{
    let ur=url.parse(req.url, true);
    let type=ur.query.type;
    modelData.requestIns(req, res, type);
    res.render('request');
}

exports.soldierLeave=(req, res)=>{
    modelData.leaveIns(req, res);
    res.render('leaveReq');
}

exports.soldierAir=(req, res)=>{
    modelData.airIns(req, res);
    res.render('airAmbulance');
}
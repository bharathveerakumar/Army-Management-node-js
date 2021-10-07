const higherModel=require('../model/higherModel')

exports.higherSoldier=(req, res)=>{
    higherModel.higherSoldier(req, res, (err, row)=>{
        if(row.length) res.render('soldierInfo', { row });
    });
}

exports.highRequest=(req, res)=>{
    higherModel.wepData(req, res, (err, row, row1, row2)=>{
        res.render('highRequest', { row, row1, row2 });
    });
}

exports.reqDelete=(req, res)=>{
    higherModel.deleteReq(req, res);
    higherModel.wepData(req, res, (err, row, row1, row2)=>{
        res.render('highRequest', { row, row1, row2 });
    });
}
const loginDetails=require('../model/login');

exports.soldierChecker=(req, res)=>{
    loginDetails.loginSoldiers(req, res, (err, row)=>{
        if(row.length){
            req.session.name=row[0].name, req.session.rank=row[0].rank, req.session.solHigh=row[0].high_code_num, req.session.solCode=row[0].code_num;
            res.render('soldierDash', { sess:req.session });
        }
    });
}

exports.higherChecker=(req, res)=>{
    loginDetails.loginHigher(req, res, (err, row)=>{
        if(row.length){
            req.session.nameHigh=row[0].name, req.session.rankHigh=row[0].rank, req.session.regiment=row[0].regiment;
            req.session.codeHigh=row[0].high_code_num;
            res.render('high_dash', { sess:req.session })
        }
    });
}
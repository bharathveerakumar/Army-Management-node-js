const sqlCon=require('./login');
const url=require('url');

exports.higherSoldier=(req, res, callBack)=>{
    sqlCon.conn.query("SELECT * FROM soldiers WHERE high_code_num='"+req.session.codeHigh+"'", (err, row)=>{
        callBack(err, row);
    });
}

exports.requestIns=(req, res, type)=>{
    sqlCon.conn.query("INSERT INTO request VALUES('"+type+"', '"+req.session.solHigh+"', '"+req.session.solCode+"', '"+req.body.type+"', NULL,'"+req.body.quantity+"')");
}

exports.leaveIns=(req, res)=>{
    sqlCon.conn.query("INSERT INTO leave_request VALUES('"+req.session.solCode+"', '"+req.body.from+"', '"+req.body.to+"', '"+req.session.solHigh+"')");
}

exports.airIns=(req, res)=>{
    sqlCon.conn.query("INSERT INTO air_ambulance VALUES('"+req.session.solCode+"', '"+req.body.location+"', '"+req.session.solHigh+"')");
}

exports.wepData=(req, res, callBack)=>{
    sqlCon.conn.query("SELECT * FROM request WHERE high_code_num='"+req.session.codeHigh+"'", (err, row)=>{
        sqlCon.conn.query("SELECT * FROM leave_request WHERE high_code_num='"+req.session.codeHigh+"'", (err, row1)=>{
            sqlCon.conn.query("SELECT * FROM air_ambulance WHERE high_code_num='"+req.session.codeHigh+"'", (err, row2)=>{
                callBack(err, row, row1, row2);
            });
        });
    });
}

exports.deleteReq=(req, res)=>{
    let ur=url.parse(req.url, true);
    let type=ur.query.table, code=ur.query.code;
    sqlCon.conn.query("DELETE FROM "+type+" WHERE code_num='"+code+"'");
}
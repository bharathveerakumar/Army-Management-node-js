const sql=require('mysql');

let conn=sql.createConnection({
    host:"localhost",
    user:"root",
    database:"army_management",
    dateStrings:true
});

conn.connect((err)=>{
    if(err) console.log(err);
    else console.log('Database Connected Successfully');
});

loginSoldiers=(req, res, callBack)=>{
    conn.query("SELECT * FROM soldiers WHERE code_num='"+req.body.Uname+"' and '"+req.body.pass+"'", (err, row)=>{
        callBack(err, row);
    });
}

loginHigher=(req, res, callBack)=>{
    conn.query("SELECT * FROM higher WHERE high_code_num='"+req.body.Uname+"' and password='"+req.body.pass+"'", (err, row)=>{
        callBack(err, row);
    });
}

module.exports={conn, loginHigher, loginSoldiers};
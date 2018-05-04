exports.AppLogin=function(req,res,next){
    try {
        res.render('index.ejs',{msg:null});
    } catch (error) {
        console.log(error);
    }
}
exports.CheckLogin=function(req,res,next){
    try {
        var user=req.body;
        var sql='select * from `userMaster` where `userid`=? and `password`=?';
        global.db.query(sql,[user.name,user.password],function(error,result){
            if(error){ console.log(error)}
            if(result){

                var sqlatt="select * from studentDetailsMaster";
                global.db.query(sqlatt,function(err,result){
                    if(err){console.log(err)}
                    
                    if(result.length > 0){
                        
                        res.render('./admin/admin',{show:result,confrm:null});
                        // res.render('./admin/admin');
                    }else{
                        res.render('./admin/admin',{show:null,confrm:null});
                        // res.render('./admin/admin');
                    }
                });
                


            }else{
                res.res.render('index.ejs',{msg:"User Id or password Wrong !"});
            }
        });
    } catch (error) {
        console.log(error);
    }
}
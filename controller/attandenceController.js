exports.attendSave=function(req,res,next){
    try {
        var attendGetData=req.body;
        // console.log(attendGetData);
        var sqlNewQuery="insert into Batch2018(`date`,`userid`,`Arun`,`Selva`,`Ashwin`) values(?,?,?,?,?)";
        global.db.query(sqlNewQuery,[attendGetData.date,1,attendGetData.chek0,attendGetData.chek1,attendGetData.chek2],function(err,result){
            if(err){console.log(err)}
            if(result){
                res.render('./admin/admin',{show:null,confrm:result});
            }else{

            }
        });
        
    } catch (error) {
        console.log(error);
    }
}   

exports.attendData=function(req,res,next){
    try {
        var sqlatt="select * from studentDetailsMaster";
        global.db.query(sqlatt,function(err,result){
            if(err){console.log(err)}
            
            if(result.length > 0){
                res.render('./admin/adminattend',{show:result});                
            }else{
                res.render('./admin/adminattend',{show:null});
            }
        });


    } catch (error) {
        console.log(error);
    }
}
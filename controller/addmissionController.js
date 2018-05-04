exports.addStudent=function(req,res,next){
    try {
        res.render('./admin/admiss.ejs');   
    } catch (error) {
        console.log(error);
    }
}
exports.index=(req,res)=>{
    res.send("this is default route");
}
exports.hello=(req,res)=>{
    res.send("this is hello route");
}
exports.withname=(req,res)=>{
    var name=req.params.name;
    res.send(name +"  this is hello route");
}
var express=require('express');
var app=express();
var routes=require('./routes');

app.get('/',routes.index);
app.get('/hello',routes.hello);


var server=app.listen(3000,()=>{
    console.log('port listen 3000');
});
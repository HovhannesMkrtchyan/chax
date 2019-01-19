var express = require('express');
var app = express();
app.get('/index.html',(req,res)=>{
	res.sendFile('index.html' , { root : __dirname});
})
app.get('/files/:file',(req,res)=>{
	res.sendFile('files'+req.params.file , { root : __dirname});
})
app.listen(process.env.PORT || 5000)

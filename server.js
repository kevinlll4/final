var express=require("express");
var app=express();
var path=require("path");
var ruta=__dirname+"/Builds/development/";
var html=ruta+"views";
    app.use(express.static(ruta));


app.get('/index',function(req,res){

	res.sendFile("index.html",{root:html});
})

app.get('/contacto',function(req,res){

	res.sendFile("contacto.html",{root:html});
})
app.get('/about',function(req,res){

	res.sendFile("about.html",{root:html});
})

app.get('/blog',function(req,res){

	res.sendFile("blog.html",{root:html});
})


app.listen(8080);
var reqst=require('http')
var logPage=require('fs')

reqst.createServer(function (req,res){
    if(req.url==='/'){
        logPage.readFile('main.html', function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }else if(req.url==='/sign-up'){
        logPage.readFile('sign.html', function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }else {
        res.writeHead(404,{'Content-Type':'text/html'})
        res.write("page did't find!!!")
        res.end()
    }
   
    
   
}).listen(8000,()=>console.log("server started"))